"use client";

import { useCallback } from "react";

import { AvatarState } from "./avatar-state";
import { useAudioPreference } from "./use-audio-preference";
import { useAvatar } from "./use-avatar";

let speechQueue: SpeechSynthesisUtterance[] = [];
let speaking = false;

// Bumped on every stop(). An utterance's onstart/onend/onerror callbacks
// close over the token that was current when they were registered - if a
// stop() has bumped it since, those callbacks know they're stale (e.g. a
// cancel()'d utterance's onend/onerror can still fire asynchronously) and
// no-op instead of corrupting state a newer stop()/speak() already set up.
let speechToken = 0;

// The most recently started utterance's text/language. Cleared once it
// finishes playing all the way through (see playNext's empty-queue
// branch), but deliberately left untouched by stop() - that's what lets
// an OFF -> ON toggle mid-speech resume the same response. The welcome
// greeting is never recorded here (speak() is called with
// trackAsResumable: false for it), so it can never be "resumed" by a
// toggle - see AudioToggle.
let interruptedText: string | null = null;
let interruptedLanguage: "en" | "de" | null = null;

// Single source of truth for every speech parameter. Anything that
// speaks - the welcome message included - goes through speak() below,
// which reads only from here.
const SPEECH_RATE = 1;
const SPEECH_PITCH = 1;
const SPEECH_VOLUME = 1;

// The Web Speech API's SpeechSynthesisVoice exposes no gender field, so a
// male voice can only be selected by matching known voice names shipped by
// the major platforms. Checked in priority order - first match wins.
//
// "Markus" (older Apple/macOS/iOS) and "Conrad" (Microsoft Edge/Windows
// neural voices) are well-established male German voices on platforms
// that ship them. "Reed" and "Eddy" are the two neutral (non-character)
// male personas in Apple's newer on-device voice set, verified present on
// a real macOS/Chrome install via speechSynthesis.getVoices() - measured
// median pitch ~104Hz and ~116Hz respectively (clearly male-range; typical
// male F0 is ~85-180Hz, female ~165-255Hz), both well below "Anna"
// (~171Hz, macOS's known female German voice). Reed is preferred over Eddy
// specifically because Eddy is almost certainly the voice already in use
// today (it was the first non-excluded match under the previous fallback
// logic) - the one the "robotic/radio-like" complaint is about - so
// promoting a genuinely different, equally neutral option is more useful
// than re-selecting the same voice. "Stefan" (older Microsoft SAPI) and
// "Grandpa"/"Rocko" (Apple's more overtly stylized/character male
// personas - elderly and gravelly respectively, verified male by pitch
// but less "professional"-sounding than Reed/Eddy) are lower-priority
// fallbacks.
const MALE_GERMAN_VOICE_NAMES = [
  "markus",
  "conrad",
  "reed",
  "eddy",
  "stefan",
  "grandpa",
  "rocko",
];

// If no known-male voice is available on this platform, avoid landing on
// a known-female voice by name where a more neutral/unrecognized
// alternative exists, before falling back to whatever German voice exists.
// "Flo", "Sandy", "Shelley", and "Grandma" were confirmed female personas
// in the same real-voice inspection (Flo/Sandy measured clearly in the
// female pitch range; Grandma is a deliberately low/raspy elderly-female
// character voice, paired by design with the male "Grandpa").
const FEMALE_GERMAN_VOICE_NAMES = [
  "anna",
  "petra",
  "helena",
  "hedda",
  "katja",
  "amala",
  "elke",
  "klarissa",
  "louisa",
  "maja",
  "flo",
  "sandy",
  "shelley",
  "grandma",
];

function getGermanVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  const germanVoices = voices.filter((voice) =>
    voice.lang.startsWith("de")
  );

  for (const name of MALE_GERMAN_VOICE_NAMES) {
    const match = germanVoices.find((voice) =>
      voice.name.toLowerCase().includes(name)
    );

    if (match) return match;
  }

  const nonFemale = germanVoices.find(
    (voice) =>
      !FEMALE_GERMAN_VOICE_NAMES.some((name) =>
        voice.name.toLowerCase().includes(name)
      )
  );

  return nonFemale ?? germanVoices[0] ?? null;
}

// Pure selection: given an already-loaded voice list, pick the right
// one for the language. No I/O, no dependency on *when* it's called -
// the single source of truth for "which voice for which language."
function selectVoice(
  language: "en" | "de",
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (language === "de") {
    return getGermanVoice(voices);
  }

  return voices.find((voice) => voice.lang.startsWith("en")) ?? null;
}

// Fixed set of English technical terms that may appear inside an
// otherwise-German response (tools, frameworks, acronyms, project stack
// names). A German voice reading these as if they were German words is
// what produces the reported mangled/"stam stam"-style distortion, since
// they aren't real German words. This is deliberately a fixed list, not
// heuristic "looks-English" detection - see splitByTechnicalTerms below,
// which is the only place this is used.
const ENGLISH_TECHNICAL_TERMS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Engineering",
  "Backend Development",
  "Hugging Face",
  "Spring WebFlux",
  "Spring Boot",
  "REST APIs",
  "FastAPI",
  "LangChain",
  "ChromaDB",
  "XGBoost",
  "PostgreSQL",
  "TypeScript",
  "Next.js",
  "Python",
  "Docker",
  "GitHub",
  "Redis",
  "React",
  "Java",
  "SQL",
  "AWS",
];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Matches a multi-word term's literal spaces against any whitespace, not
// just U+0020 - the LLM's German output sometimes renders the space in a
// two-word term (e.g. "Spring Boot") as a narrow no-break space (U+202F)
// or similar typographic variant, which a plain literal space would miss
// entirely and leave the whole term stuck in the German segment.
function buildTermPattern(term: string): string {
  return term.split(" ").map(escapeRegExp).join("\\s+");
}

// Sorted longest-first so a multi-word term (e.g. "Spring WebFlux") is
// preferred over any shorter overlapping alternative when both could
// otherwise match at the same position.
const ENGLISH_TECHNICAL_TERM_PATTERN = new RegExp(
  `\\b(${[...ENGLISH_TECHNICAL_TERMS]
    .sort((a, b) => b.length - a.length)
    .map(buildTermPattern)
    .join("|")})\\b`
);

interface SpeechSegment {
  text: string;
  language: "en" | "de";
}

// The LLM wraps technical terms in markdown bold ("**Java**"), so the
// German text split() leaves behind between two adjacent terms is often
// just the leftover "**" markers plus whatever real separator sat between
// them (e.g. "**Java**, **SQL**" leaves "**, **"). Those asterisks carry
// no spoken content and are what reaches speechSynthesis.speak() as a
// meaningless fragment (reported as a "stam stam"-style noise) - they're
// stripped from German segments only, since English segments are always
// the exact matched term text and never contain them. This is scoped to
// exactly the punctuation the term-splitting itself produces, not a
// general markdown-stripping pass over the response.
function stripMarkdownAsterisks(text: string): string {
  return text.replace(/\*+/g, "");
}

// Splits German response text into ordered German/English segments so
// each run can be spoken with its own voice while preserving word order,
// punctuation, numbers, and URLs exactly as written (anything not an
// exact technical-term match is left untouched inside its surrounding
// German segment, aside from the asterisk strip above). Plain German text
// with no matches comes back as a single "de" segment - identical in
// effect to the previous single-utterance behavior, so ordinary responses
// are unaffected. A German segment left empty (or whitespace-only) once
// its asterisks are removed - e.g. a run that was nothing but "**" -
// carries nothing to speak and is dropped rather than queued as its own
// utterance; if that merges two same-language runs back together (their
// only separator having been asterisk-only), they're combined into one
// segment instead of leaving a gap.
function splitByTechnicalTerms(text: string): SpeechSegment[] {
  const rawParts = text.split(ENGLISH_TECHNICAL_TERM_PATTERN);
  const segments: SpeechSegment[] = [];

  rawParts.forEach((part, index) => {
    // The regex has exactly one capture group, so split() alternates
    // [non-match, match, non-match, match, ...] - odd indices are always
    // the captured English terms.
    const language: "en" | "de" = index % 2 === 1 ? "en" : "de";
    const cleaned = language === "de" ? stripMarkdownAsterisks(part) : part;

    if (!cleaned.trim()) return;

    const previous = segments[segments.length - 1];

    if (previous && previous.language === language) {
      // Two same-language runs only end up adjacent here because
      // whatever separated them was dropped for being asterisk/
      // whitespace-only (e.g. "**Java** **Spring Boot**" with nothing
      // but a markdown-wrapped space between them) - without this, they
      // would otherwise be joined with no separator at all.
      const needsSpace =
        previous.text.length > 0 &&
        !/\s$/.test(previous.text) &&
        !/^\s/.test(cleaned);

      previous.text += (needsSpace ? " " : "") + cleaned;
    } else {
      segments.push({ text: cleaned, language });
    }
  });

  return segments;
}

// Chrome (and others) load the voice list asynchronously - immediately
// after page load, getVoices() can return an empty array for a brief
// window before the "voiceschanged" event fires. Any speak() call that
// lands in that window (in practice: the welcome message, which speaks
// almost immediately on mount, before a user has had time to interact)
// would silently get no explicit voice and fall back to the browser's
// own default - a *different* voice than every later call, which always
// happens well after the list has loaded. This waits for the list to be
// ready before any voice is selected, for every caller equally - not a
// welcome-message special case, just making the one shared speak()
// implementation correct regardless of when it's first called.
let voicesReadyPromise: Promise<SpeechSynthesisVoice[]> | null = null;

function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  if (voicesReadyPromise) return voicesReadyPromise;

  voicesReadyPromise = new Promise((resolve) => {
    const existing = window.speechSynthesis.getVoices();

    if (existing.length > 0) {
      resolve(existing);
      return;
    }

    const handleVoicesChanged = () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );
      resolve(window.speechSynthesis.getVoices());
    };

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged
    );

    // Measured real-world load time was ~30ms; this is a generous
    // fallback in case "voiceschanged" never fires on some browser.
    setTimeout(() => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );
      resolve(window.speechSynthesis.getVoices());
    }, 1000);
  });

  return voicesReadyPromise;
}

// Builds one utterance with the shared speech parameters and the correct
// voice for its language - the single place that does this, reused for
// both a plain single-language utterance and each segment of a
// German-with-embedded-English response.
function buildUtterance(
  text: string,
  language: "en" | "de",
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = language === "de" ? "de-DE" : "en-US";
  utterance.rate = SPEECH_RATE;
  utterance.pitch = SPEECH_PITCH;
  utterance.volume = SPEECH_VOLUME;

  const voice = selectVoice(language, voices);

  if (voice) {
    utterance.voice = voice;
  }

  return utterance;
}

function playNext(token: number) {
  // A stale callback from an utterance stop() already cancelled - ignore
  // it instead of undoing whatever the newer stop()/speak() set up.
  if (token !== speechToken) return;

  if (speechQueue.length === 0) {
    speaking = false;

    // Nothing left to play - whatever was last speaking ran to
    // completion on its own, so there's nothing left to resume.
    interruptedText = null;
    interruptedLanguage = null;

    useAvatar.getState().setState(AvatarState.IDLE);
    return;
  }

  speaking = true;

  const utterance = speechQueue.shift()!;

  utterance.onstart = () => {
    if (token !== speechToken) return;
    useAvatar.getState().setState(AvatarState.SPEAKING);
  };

  utterance.onend = () => {
    playNext(token);
  };

  utterance.onerror = () => {
    playNext(token);
  };

  window.speechSynthesis.speak(utterance);
}

interface SpeakOptions {
  // Whether this utterance can be replayed by a later OFF -> ON toggle if
  // interrupted mid-speech. True for real assistant responses; false for
  // the welcome greeting, which must never be "resumed" this way.
  trackAsResumable?: boolean;
}

export function useSpeech() {
  const speak = useCallback(
    (
      text: string,
      language: "en" | "de",
      options?: SpeakOptions
    ) => {
      if (typeof window === "undefined") return;

      const trimmed = text.trim();

      if (!trimmed) return;

      // Single gate for the whole pipeline: if the user has audio off,
      // this is a no-op before voices are even loaded or a queue entry
      // is created - not a special case for any particular message,
      // just how speak() itself behaves while the preference is off.
      if (!useAudioPreference.getState().enabled) return;

      const trackAsResumable = options?.trackAsResumable ?? true;

      ensureVoicesLoaded().then((voices) => {
        // Re-check: voice loading is async, so the preference may have
        // been toggled off while this was in flight (e.g. rapid
        // OFF -> ON -> OFF clicks). Without this, a stale call can still
        // queue and play speech after the user turned audio back off.
        if (!useAudioPreference.getState().enabled) return;

        // English is unaffected: a German response may contain embedded
        // English technical terms that need the English voice, but an
        // English response never needs to be split - it's already one
        // utterance in the right voice, exactly as before this change.
        const segments: SpeechSegment[] =
          language === "de"
            ? splitByTechnicalTerms(trimmed)
            : [{ text: trimmed, language }];

        const utterances = segments.map((segment) =>
          buildUtterance(segment.text, segment.language, voices)
        );

        if (utterances.length === 0) return;

        if (trackAsResumable) {
          // The *original* full text/language is what's tracked, not the
          // individual segments - resuming re-runs the same split from
          // the start, which is what makes this one resumable response
          // instead of several unrelated ones.
          interruptedText = trimmed;
          interruptedLanguage = language;
        }

        speechQueue.push(...utterances);

        if (!speaking) {
          playNext(speechToken);
        }
      });
    },
    []
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;

    speechQueue = [];
    speaking = false;
    speechToken += 1;

    // interruptedText/interruptedLanguage are deliberately left as-is -
    // that's what a subsequent OFF -> ON toggle replays.

    window.speechSynthesis.cancel();

    useAvatar
      .getState()
      .setState(AvatarState.IDLE);
  }, []);

  // What a later OFF -> ON toggle should resume, if anything. Null once
  // the last-spoken response finished on its own (nothing to resume) or
  // if nothing resumable has been spoken yet.
  const getInterrupted = useCallback((): {
    text: string;
    language: "en" | "de";
  } | null => {
    if (interruptedText === null || interruptedLanguage === null) {
      return null;
    }

    return {
      text: interruptedText,
      language: interruptedLanguage,
    };
  }, []);

  return {
    speak,
    stop,
    getInterrupted,
  };
}
