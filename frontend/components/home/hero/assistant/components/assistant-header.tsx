"use client";

import { Sparkles } from "lucide-react";

import { useLanguage } from "@/i18n";

export default function AssistantHeader() {
  const { language } = useLanguage();

  const title =
    language === "de"
      ? "Frag Abhishek"
      : "Ask Abhishek";

  const subtitle =
    language === "de"
      ? "Frag mich alles über meine Projekte, Erfahrungen oder Fähigkeiten."
      : "Ask me anything about my work, projects, or experience.";

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20">
        <Sparkles size={18} />
      </div>

      <div className="flex flex-col">
        <h3 className="text-base font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-neutral-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}