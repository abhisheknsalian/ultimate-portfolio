"use client";

import { create } from "zustand";

import { useAvatar } from "@/components/home/hero/avatar/use-avatar";
import { AvatarState } from "@/components/home/hero/avatar/avatar-state";

import {
  getErrorMessage,
  getWelcomeMessage,
} from "../constants/prompts";
import { streamAssistantMessage } from "../services/assistant-api";
import {
  AssistantAction,
  AssistantMessage,
  AssistantState,
} from "../types/assistant";

interface AssistantStore extends AssistantState {
  sendMessage: (
    message: string,
    language: "en" | "de"
  ) => Promise<void>;

  clearChat: (
    language: "en" | "de"
  ) => void;

  setWelcomeLanguage: (
    language: "en" | "de"
  ) => void;

  openAssistant: () => void;
  closeAssistant: () => void;
  toggleAssistant: () => void;
}

const createWelcomeMessage = (
  language: "en" | "de"
): AssistantMessage => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content: getWelcomeMessage(language),
  createdAt: new Date(),
  isWelcome: true,
});

export const useAssistantStore = create<AssistantStore>((set, get) => ({
  expanded: false,
  loading: false,

  messages: [],

  openAssistant: () =>
    set({
      expanded: true,
    }),

  closeAssistant: () =>
    set({
      expanded: false,
    }),

  toggleAssistant: () =>
    set((state) => ({
      expanded: !state.expanded,
    })),

  clearChat: (language) =>
    set({
      messages: [createWelcomeMessage(language)],
    }),

  setWelcomeLanguage: (language) =>
    set((state) => {
      if (
        state.messages.length === 0 ||
        (state.messages.length === 1 &&
          state.messages[0].role === "assistant")
      ) {
        return {
          messages: [createWelcomeMessage(language)],
        };
      }

      return {};
    }),

  sendMessage: async (
    text: string,
    language: "en" | "de"
  ) => {
    const message = text.trim();

    if (!message) return;

    const userMessage: AssistantMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      createdAt: new Date(),
    };

    const assistantId = crypto.randomUUID();

    const assistantMessage: AssistantMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
      createdAt: new Date(),
    };

    set((state) => ({
      expanded: true,
      loading: true,
      messages: [
        ...state.messages,
        userMessage,
        assistantMessage,
      ],
    }));

    // Avatar starts thinking
    useAvatar.getState().setState(
      AvatarState.THINKING
    );

    let startedSpeaking = false;

    try {
      await streamAssistantMessage(
        message,
        [...get().messages],
        language,

        (token) => {
          // Switch to speaking only once
          if (!startedSpeaking) {
            startedSpeaking = true;

            useAvatar
              .getState()
              .setState(AvatarState.SPEAKING);
          }

          set((state) => ({
            messages: state.messages.map((msg) =>
              msg.id === assistantId
                ? {
                    ...msg,
                    content: msg.content + token,
                  }
                : msg
            ),
          }));
        },

        (action: AssistantAction) => {
          set((state) => ({
            messages: state.messages.map((msg) =>
              msg.id === assistantId
                ? {
                    ...msg,
                    action,
                  }
                : msg
            ),
          }));
        }
      );

      set({
        loading: false,
      });

      // Avatar goes back to idle
      useAvatar
        .getState()
        .setState(AvatarState.IDLE);
    } catch (error) {
      console.error(error);

      useAvatar
        .getState()
        .setState(AvatarState.IDLE);

      set((state) => ({
        loading: false,
        messages: state.messages.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content: getErrorMessage(language),
              }
            : msg
        ),
      }));
    }
  },
}));