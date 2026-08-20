"use client";

import {
  createContext,
  useContext,
} from "react";

import en from "./en";

export type Language = "en" | "de";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof en;
}

export const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguageContext must be used inside LanguageProvider"
    );
  }

  return context;
}