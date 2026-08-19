"use client";

import { create } from "zustand";

const STORAGE_KEY = "audio-enabled";

function readStoredPreference(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function writeStoredPreference(enabled: boolean): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) - the
    // preference just won't persist across visits.
  }
}

interface AudioPreferenceStore {
  // Off by default for every first-time visitor - readStoredPreference()
  // only returns true if a previous visit explicitly turned it on.
  enabled: boolean;
  toggle: () => void;
}

export const useAudioPreference = create<AudioPreferenceStore>(
  (set, get) => ({
    enabled: readStoredPreference(),

    toggle: () => {
      const next = !get().enabled;

      writeStoredPreference(next);
      set({ enabled: next });
    },
  })
);
