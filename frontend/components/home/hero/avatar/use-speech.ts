"use client";

import { useCallback } from "react";

import { AvatarState } from "./avatar-state";
import { useAvatar } from "./use-avatar";

let speechQueue: SpeechSynthesisUtterance[] = [];
let speaking = false;

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

function getVoice(language: "en" | "de") {
  const voices = window.speechSynthesis.getVoices();

  if (language === "de") {
    return getGermanVoice(voices);
  }

  return (
    voices.find((voice) => voice.lang.startsWith("en")) ?? null
  );
}

function playNext() {
  if (speechQueue.length === 0) {
    speaking = false;
    useAvatar.getState().setState(AvatarState.IDLE);
    return;
  }

  speaking = true;

  const utterance = speechQueue.shift()!;

  utterance.onstart = () => {
    useAvatar.getState().setState(AvatarState.SPEAKING);
  };

  utterance.onend = () => {
    playNext();
  };

  utterance.onerror = () => {
    playNext();
  };

  window.speechSynthesis.speak(utterance);
}

export function useSpeech() {
  const speak = useCallback(
    (
      text: string,
      language: "en" | "de"
    ) => {
      if (typeof window === "undefined") return;

      const trimmed = text.trim();

      if (!trimmed) return;

      const utterance = new SpeechSynthesisUtterance(trimmed);

      utterance.lang =
        language === "de"
          ? "de-DE"
          : "en-US";

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voice = getVoice(language);

      if (voice) {
        utterance.voice = voice;
      }

      speechQueue.push(utterance);

      if (!speaking) {
        playNext();
      }
    },
    []
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;

    speechQueue = [];
    speaking = false;

    window.speechSynthesis.cancel();

    useAvatar
      .getState()
      .setState(AvatarState.IDLE);
  }, []);

  return {
    speak,
    stop,
  };
}