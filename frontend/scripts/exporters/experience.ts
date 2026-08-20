import { experiences } from "../../data/experience";
import {
  KnowledgeDocument,
  KnowledgeSection,
} from "../types";

export function exportExperience(): KnowledgeDocument[] {
  return experiences.map((experience, index) => {
    const sections: KnowledgeSection[] = [
      {
        title: "Role",
        content: experience.role,
      },
      {
        title: "Company",
        content: experience.company,
      },
      {
        title: "Location",
        content: experience.location,
      },
      {
        title: "Duration",
        content: `${experience.startDate} - ${experience.endDate}`,
      },
      {
        title: "Responsibilities",
        content: experience.description.join("\n"),
      },
    ].filter(
      (section) =>
        typeof section.content === "string" &&
        section.content.trim().length > 0
    );

    return {
      id: `experience-${index}`,
      category: "experience",
      title: `${experience.role} - ${experience.company}`,
      sections,
      technologies: [],
      metadata: {
        company: experience.company,
        role: experience.role,
        location: experience.location,
      },
    };
  });
}