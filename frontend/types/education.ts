import { LocalizedText } from "./localized-text";

export interface Education {
  institution: LocalizedText;

  degree: LocalizedText;

  location: LocalizedText;

  start: string;

  end: string;
}