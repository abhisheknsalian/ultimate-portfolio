import { certifications } from "../../data/certifications";
import {
  KnowledgeDocument,
  KnowledgeSection,
} from "../types";

export function exportCertifications(): KnowledgeDocument[] {
  return certifications.map((certification, index) => ({
    id: `certification-${index}`,
    category: "certification",
    title: certification.name,
    sections: [
      {
        title: "Issuer",
        content: certification.issuer,
      },
    ],
    technologies: [],
    metadata: {},
  }));
}