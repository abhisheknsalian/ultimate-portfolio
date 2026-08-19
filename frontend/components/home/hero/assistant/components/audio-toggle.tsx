"use client";

import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { useAudioPreference } from "@/components/home/hero/avatar/use-audio-preference";
import { useLanguage } from "@/i18n";

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
  const { language } = useLanguage();

  const label =
    language === "de"
      ? enabled
        ? "Ton ausschalten"
        : "Ton einschalten"
      : enabled
        ? "Mute audio"
        : "Unmute audio";

  if (!mounted) {
    return (
      <button
        type="button"
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
      onClick={toggle}
      aria-label={label}
      aria-pressed={enabled}
      title={label}
      className={TOGGLE_CLASS}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
