import { LocalizedText } from "./localized-text";

export interface Experience {
  company: string;

  role: LocalizedText;

  location: LocalizedText;

  startDate: string;

  endDate: string;

  description: LocalizedText[];

  technologies: string[];
}