"use client";

export function highlightProject(projectId: string) {
  const element = document.querySelector(
    `[data-project="${projectId}"]`
  ) as HTMLElement | null;

  if (!element) {
    console.warn(`Project "${projectId}" not found.`);
    return;
  }

  element.classList.add("ai-highlight");

  setTimeout(() => {
    element.classList.remove("ai-highlight");
  }, 1800);

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}