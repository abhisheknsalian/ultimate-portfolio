/**
 * AI Portfolio Assistant Prompts
 * -------------------------------------
 * Centralized prompts used throughout the assistant.
 */

import type { Language } from "@/i18n/language-context";

export const SYSTEM_PROMPT = `
You are the AI Portfolio Assistant for Abhishek Nagesh Salian.

Your purpose is to help visitors, recruiters, and hiring managers quickly understand
Abhishek's experience, technical skills, projects, and background.

Guidelines:

- Be professional, friendly, and concise.
- Base responses on portfolio information.
- Never invent experience or projects.
- Keep answers focused and easy to read.
- Suggest relevant sections of the portfolio whenever appropriate.
- Encourage visitors to explore projects, experience, and resume.
`;

export function getWelcomeMessage(language: Language) {
  return language === "de"
    ? "Hallo! Willkommen auf meinem Portfolio. Frag mich gerne alles über meine Projekte, Erfahrungen oder meinen beruflichen Hintergrund."
    : "Hi! Welcome to my portfolio. Feel free to ask me anything about my work, projects, or experience.";
}

export function getInputPlaceholder(language: Language) {
  return language === "de"
    ? "Frage etwas über meine Arbeit..."
    : "Ask anything about my work...";
}

export function getEmptyChatMessage(language: Language) {
  return language === "de"
    ? "Starte eine Unterhaltung oder wähle eine der vorgeschlagenen Aktionen."
    : "Start a conversation or choose one of the quick actions below.";
}

export function getLoadingMessage(language: Language) {
  return language === "de"
    ? "Denke nach..."
    : "Thinking...";
}

export function getErrorMessage(language: Language) {
  return language === "de"
    ? "Entschuldigung, etwas ist schiefgelaufen. Bitte versuche es erneut."
    : "Sorry, something went wrong. Please try again.";
}