export interface KnowledgeSection {
  title: string;
  content: string;
}

export interface KnowledgeDocument {
  id: string;

  category:
    | "about"
    | "project"
    | "experience"
    | "education"
    | "skills"
    | "certification";

  title: string;

  sections: KnowledgeSection[];

  technologies: string[];

  metadata: Record<string, unknown>;
}