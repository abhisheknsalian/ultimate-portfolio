"use client";

import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { useAudioPreference } from "@/components/home/hero/avatar/use-audio-preference";
import { useSpeech } from "@/components/home/hero/avatar/use-speech";
import { useLanguage } from "@/i18n";

import { getWelcomeMessage } from "../constants/prompts";
import { useAssistantStore } from "../store/assistant-store";

// True once the welcome greeting has played this page load. It must only
// ever play for the very first OFF -> ON enable, before any conversation
// has started - never again for the rest of the session, no matter how
// many more times audio gets toggled. Resets naturally on refresh (this
// module is re-evaluated on a fresh page load).
let hasPlayedWelcome = false;

const TOGGLE_CLASS =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

// The stored preference is only known once we're on the client, so
// this renders a neutral (off) placeholder for the one frame before
// hydration completes - the same pattern theme-toggle.tsx uses for the
// same reason (avoids a server/client render mismatch).
function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function AudioToggle() {
  const mounted = useMounted();
  const enabled = useAudioPreference((state) => state.enabled);
  const toggle = useAudioPreference((state) => state.toggle);
  const { speak, stop, getInterrupted } = useSpeech();
  const { language } = useLanguage();

  // Audio only ever speaks in direct response to this explicit toggle -
  // never on mount/refresh, no matter what the restored preference is.
  const handleToggle = () => {
    const wasEnabled = useAudioPreference.getState().enabled;

    toggle();

    if (wasEnabled) {
      // Turning OFF: stop immediately. use-speech.ts preserves what was
      // interrupted (if anything) so a later ON can resume it - it is
      // deliberately not cleared here.
      stop();
      return;
    }

    // Turning ON. Clear the deck first so nothing stray can overlap
    // whatever we're about to speak (this doesn't touch the interrupted
    // response use-speech.ts remembered from before the OFF).
    stop();

    const interrupted = getInterrupted();

    if (interrupted) {
      speak(interrupted.text, interrupted.language);
      return;
    }

    // Nothing was interrupted. Only speak the welcome greeting, and only
    // once per page load, before the user has actually started chatting -
    // never as a side effect of toggling audio during/after a
    // conversation.
    const conversationHasStarted = useAssistantStore
      .getState()
      .messages.some((message) => message.role === "user");

    if (!conversationHasStarted && !hasPlayedWelcome) {
      hasPlayedWelcome = true;

      speak(getWelcomeMessage(language), language, {
        trackAsResumable: false,
      });
    }
  };

  const label =
    language === "de"
      ? enabled
        ? "Ton ausschalten"
        : "Ton einschalten"
      : enabled
        ? "Mute audio"
        : "Unmute audio";

  if (!mounted) {
    // Same handler as the hydrated button below - only the displayed
    // icon/label are pinned to the neutral "off" state here to avoid a
    // server/client render mismatch. Without a real onClick here, a click
    // landing in the brief pre-hydration window is silently swallowed
    // (the button re-renders correctly right after, but that click is
    // gone) - from the user's side that reads as "the first click did
    // nothing," requiring a second click to actually enable audio and
    // speak the welcome message.
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={label}
        className={TOGGLE_CLASS}
      >
        <VolumeX size={18} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      aria-pressed={enabled}
      title={label}
      className={TOGGLE_CLASS}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
