"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "@/i18n";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() =>
        setLanguage(language === "en" ? "de" : "en")
      }
      className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-card focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Languages size={16} />

      <span>
        {language === "en"
          ? "🇺🇸 EN"
          : "🇩🇪 DE"}
      </span>
    </button>
  );
}