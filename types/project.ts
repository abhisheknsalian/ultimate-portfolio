export interface Project {
  slug: string;

  title: string;

  category:
    | "Generative AI"
    | "Machine Learning"
    | "Data Engineering"
    | "Data Analytics"
    | "Natural Language Processing";

  featured: boolean;
  featuredOrder?: number;

  year: string;
  status: "Completed" | "In Progress";

  description: string;
  challenge: string;
  solution: string;
  impact: string;

  metrics?: string[];

  technologies: string[];

  github: string;
  liveDemo?: string;
}