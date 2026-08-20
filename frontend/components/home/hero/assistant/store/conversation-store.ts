"use client";

import { create } from "zustand";

interface ConversationState {
  currentTopic: string | null;

  setTopic: (topic: string | null) => void;

  clear: () => void;
}

export const useConversationStore =
  create<ConversationState>((set) => ({
    currentTopic: null,

    setTopic: (topic) =>
      set({
        currentTopic: topic,
      }),

    clear: () =>
      set({
        currentTopic: null,
      }),
  }));