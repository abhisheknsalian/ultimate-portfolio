import { education } from "../../data/education";
import {
  KnowledgeDocument,
  KnowledgeSection,
} from "../types";

export function exportEducation(): KnowledgeDocument[] {
  return education.map((item, index) => {
    const sections: KnowledgeSection[] = [
      {
        title: "Degree",
        content: item.degree,
      },
      {
        title: "Institution",
        content: item.institution,
      },
      {
        title: "Location",
        content: item.location,
      },
      {
        title: "Duration",
        content: `${item.start} - ${item.end}`,
      },
    ];

    return {
      id: `education-${index}`,
      category: "education",
      title: item.institution,
      sections,
      technologies: [],
      metadata: {},
    };
  });
}