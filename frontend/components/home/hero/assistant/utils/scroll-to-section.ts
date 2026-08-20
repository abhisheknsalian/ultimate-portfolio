"use client";

import { highlightSection } from "./highlight-section";

export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`Section "${id}" not found.`);
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // Wait until scrolling finishes before highlighting
  setTimeout(() => {
    highlightSection(id);
  }, 700);
}