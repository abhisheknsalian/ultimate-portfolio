import { skillCategories } from "../../data/skills";
import {
  KnowledgeDocument,
  KnowledgeSection,
} from "../types";

export function exportSkills(): KnowledgeDocument[] {
  return skillCategories.map((category, index) => ({
    id: `skills-${index}`,
    category: "skills",
    title: category.title,
    sections: [
      {
        title: "Skills",
        content: category.skills.join(", "),
      },
    ],
    technologies: category.skills,
    metadata: {},
  }));
}