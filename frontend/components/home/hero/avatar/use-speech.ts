"use client";

import { useCallback } from "react";

import { AvatarState } from "./avatar-state";
import { useAvatar } from "./use-avatar";

let speechQueue: SpeechSynthesisUtterance[] = [];
let speaking = false;

function getVoice(language: "en" | "de") {
  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find((voice) =>
      language === "de"
        ? voice.lang.startsWith("de")
        : voice.lang.startsWith("en")
    ) ?? null
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