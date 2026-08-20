"use client";

import {
  ReactNode,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import en from "./en";
import de from "./de";
import {
  Language,
  LanguageContext,
} from "./language-context";

interface Props {
  children: ReactNode;
}

const translations = {
  en,
  de,
};

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp(`(^| )${name}=([^;]+)`)
  );

  return match ? decodeURIComponent(match[2]) : null;
}

function subscribeNoop() {
  return () => {};
}

function setCookie(
  name: string,
  value: string,
  days = 365
) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

export function LanguageProvider({
  children,
}: Props) {
  const [language, setLanguage] = useState<Language>(
    () => (getCookie("language") === "de" ? "de" : "en")
  );

  const ready = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  useEffect(() => {
    if (!ready) return;

    document.documentElement.lang = language;
    setCookie("language", language);
  }, [language, ready]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  if (!ready) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}