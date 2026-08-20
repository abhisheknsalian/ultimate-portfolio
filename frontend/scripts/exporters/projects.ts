import { projects } from "../../data/projects";
import { KnowledgeDocument, KnowledgeSection } from "../types";

export function exportProjects(): KnowledgeDocument[] {
  return projects.map((project) => {
    const sections: KnowledgeSection[] = [
      {
        title: "Description",
        content: project.description,
      },
      {
        title: "Challenge",
        content: project.challenge,
      },
      {
        title: "Solution",
        content: project.solution,
      },
      {
        title: "Impact",
        content: project.impact,
      },
    ].filter(
      (section) =>
        typeof section.content === "string" &&
        section.content.trim().length > 0
    );

    return {
      id: `project-${project.slug}`,
      category: "project",
      title: project.title,

      sections,

      technologies: project.technologies,

      metadata: {
        featured: project.featured,
        category: project.category,
        github: project.github,
        year: project.year,
        status: project.status,
      },
    };
  });
}