"use client";

import { scrollToSection } from "../utils/scroll-to-section";
import { highlightProject } from "../utils/highlight-project";

import { AssistantAction } from "../types/assistant";

export function dispatchAssistantAction(
  action: AssistantAction
) {
  switch (action.type) {
    case "OPEN_PROJECTS":
      scrollToSection("projects");
      break;

    case "OPEN_EXPERIENCE":
      scrollToSection("experience");
      break;

    case "OPEN_EDUCATION":
      scrollToSection("education");
      break;

    case "OPEN_CONTACT":
      scrollToSection("contact");
      break;

    case "OPEN_FEATURED_PROJECT":
      if (action.target) {
        highlightProject(action.target);
      }
      break;

    case "OPEN_GITHUB":
      window.open(
        "https://github.com/abhisheknsalian",
        "_blank"
      );
      break;

    case "OPEN_LINKEDIN":
      window.open(
        "https://linkedin.com/in/abhishek-salian-13b3091a5",
        "_blank"
      );
      break;

    default:
      break;
  }
}