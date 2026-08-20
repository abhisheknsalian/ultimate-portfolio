export function highlightSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  element.classList.add("ai-highlight");

  setTimeout(() => {
    element.classList.remove("ai-highlight");
  }, 1800);
}