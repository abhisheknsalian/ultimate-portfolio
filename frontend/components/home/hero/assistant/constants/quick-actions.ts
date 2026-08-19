export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  prompt: string;
}

export function getQuickActions(
  language: "en" | "de"
): QuickAction[] {
  if (language === "de") {
    return [
      {
        id: "about",
        title: "Über mich",
        icon: "👋",
        prompt: "Erzähl mir etwas über dich.",
      },
      {
        id: "project",
        title: "Bestes Projekt",
        icon: "🚀",
        prompt: "Zeige mir dein bestes Projekt.",
      },
      {
        id: "experience",
        title: "Berufserfahrung",
        icon: "💼",
        prompt: "Erzähl mir von deiner Berufserfahrung.",
      },
    ];
  }

  return [
    {
      id: "about",
      title: "About Me",
      icon: "👋",
      prompt: "Tell me about yourself.",
    },
    {
      id: "project",
      title: "Featured Project",
      icon: "🚀",
      prompt: "Show me your best project.",
    },
    {
      id: "experience",
      title: "Experience",
      icon: "💼",
      prompt: "Tell me about your experience.",
    },
  ];
}