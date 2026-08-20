import { siteConfig } from "../../data/site";
import {
  KnowledgeDocument,
  KnowledgeSection,
} from "../types";

export function exportSite(): KnowledgeDocument[] {
  const sections: KnowledgeSection[] = [
    {
      title: "Name",
      content: siteConfig.name,
    },
    {
      title: "Role",
      content: siteConfig.role,
    },
    {
      title: "Headline",
      content: siteConfig.headline,
    },
    {
      title: "Location",
      content: siteConfig.location,
    },
    {
      title: "Availability",
      content: siteConfig.availability,
    },
  ];

  return [
    {
      id: "about",
      category: "about",
      title: "About Abhishek",
      sections,
      technologies: [],
      metadata: {},
    },
  ];
}