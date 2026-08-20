"use client";

import { useLanguage } from "@/i18n";

export default function AssistantCard() {
  const { language } = useLanguage();

  const quickActions =
    language === "de"
      ? [
          {
            emoji: "👋",
            title: "Über mich",
            subtitle: "Wer ich bin",
          },
          {
            emoji: "🚀",
            title: "Bestes Projekt",
            subtitle: "Mein Hauptprojekt",
          },
          {
            emoji: "💼",
            title: "Warum ich?",
            subtitle: "Meine Stärken",
          },
          {
            emoji: "📄",
            title: "Lebenslauf",
            subtitle: "Erfahrung & Fähigkeiten",
          },
        ]
      : [
          {
            emoji: "👋",
            title: "About Me",
            subtitle: "Who I am",
          },
          {
            emoji: "🚀",
            title: "Best Project",
            subtitle: "My flagship work",
          },
          {
            emoji: "💼",
            title: "Why Hire Me?",
            subtitle: "My strengths",
          },
          {
            emoji: "📄",
            title: "Resume",
            subtitle: "Experience & Skills",
          },
        ];

  return (
    <div className="border-t border-border px-7 py-7">
      {/* Greeting */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight">
          {language === "de"
            ? "👋 Willkommen! Ich bin Abhishek"
            : "👋 Welcome! I'm Abhishek"}
        </h3>

        <p className="text-sm leading-7 text-muted-foreground">
          {language === "de"
            ? "Machine-Learning-Ingenieur mit Leidenschaft für intelligente KI-Systeme, skalierbare Cloud-Plattformen und produktionsreife Machine-Learning-Anwendungen."
            : "Machine Learning Engineer passionate about building intelligent AI systems, scalable cloud platforms, and production-ready machine learning applications."}
        </p>
      </div>

      {/* Input */}
      <button
        className="
          mt-7
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          border-border
          bg-background/80
          px-5
          py-4
          text-left
          transition-all
          duration-300
          hover:border-blue-500/40
          hover:bg-accent
        "
      >
        <span className="text-sm text-muted-foreground">
          {language === "de"
            ? "💬 Sprich mit Abhishek..."
            : "💬 Talk with Abhishek..."}
        </span>

        <span className="text-lg">→</span>
      </button>

      {/* Quick Actions */}
      <div className="mt-7 grid grid-cols-2 gap-3">
        {quickActions.map((item) => (
          <button
            key={item.title}
            className="
              rounded-2xl
              border
              border-border
              bg-background/60
              p-4
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg
            "
          >
            <div className="text-2xl">{item.emoji}</div>

            <h4 className="mt-3 text-sm font-semibold">
              {item.title}
            </h4>

            <p className="mt-1 text-xs text-muted-foreground">
              {item.subtitle}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}