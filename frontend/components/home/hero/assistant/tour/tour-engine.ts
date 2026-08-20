"use client";

export interface TourStep {
  id: string;
  title: string;
  section: string;
  message: string;
}

export const portfolioTour: TourStep[] = [
  {
    id: "about",
    title: "About Me",
    section: "about",
    message:
      "Let me introduce myself.",
  },

  {
    id: "experience",
    title: "Experience",
    section: "experience",
    message:
      "Now let's look at my professional experience.",
  },

  {
    id: "projects",
    title: "Projects",
    section: "projects",
    message:
      "These are the projects I'm most proud of.",
  },

  {
    id: "skills",
    title: "Skills",
    section: "skills",
    message:
      "Here are the technologies I work with.",
  },

  {
    id: "education",
    title: "Education",
    section: "education",
    message:
      "This is my academic background.",
  },

  {
    id: "contact",
    title: "Contact",
    section: "contact",
    message:
      "If you'd like to get in touch, here's how you can reach me.",
  },
];