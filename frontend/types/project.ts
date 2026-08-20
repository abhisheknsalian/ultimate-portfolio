export interface LocalizedText {
  en: string;
  de: string;
}

export type ProjectCategory =
  | LocalizedText;

export type ProjectStatus =
  | "Completed"
  | "In Progress";

export interface Project {
  slug: string;

  title: LocalizedText;

  category: LocalizedText;

  featured: boolean;
  featuredOrder?: number;

  year: string;

  status: ProjectStatus;

  description: LocalizedText;

  challenge: LocalizedText;

  solution: LocalizedText;

  impact: LocalizedText;

  metrics?: LocalizedText[];

  technologies: string[];

  github: string;

  liveDemo?: string;
}