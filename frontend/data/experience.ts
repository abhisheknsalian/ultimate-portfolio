import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Revature",

    role: {
      en: "Associate Software Engineer",
      de: "Associate Software Engineer",
    },

    location: {
      en: "India",
      de: "Indien",
    },

    startDate: "Jul 2023",

    endDate: "Jun 2025",

    description: [
      {
        en: "Developed backend applications using Java, Spring Boot, Spring WebFlux, and relational databases for enterprise software solutions.",
        de: "Entwicklung von Backend-Anwendungen mit Java, Spring Boot, Spring WebFlux und relationalen Datenbanken für Unternehmenssoftware-Lösungen.",
      },
      {
        en: "Designed and optimized SQL queries and database operations, improving data retrieval efficiency for application workflows.",
        de: "Entwurf und Optimierung von SQL-Abfragen und Datenbankoperationen zur Verbesserung der Datenabfrageeffizienz in Anwendungs-Workflows.",
      },
      {
        en: "Built backend services for data processing, business logic, and analytics-oriented workflows.",
        de: "Entwicklung von Backend-Diensten für Datenverarbeitung, Geschäftslogik und analyseorientierte Workflows.",
      },
      {
        en: "Implemented Redis caching to reduce repeated database operations and improve backend response performance.",
        de: "Implementierung von Redis-Caching zur Reduzierung wiederholter Datenbankoperationen und Verbesserung der Backend-Antwortzeiten.",
      },
      {
        en: "Worked with REST APIs, React, TypeScript, and service-oriented application components across the full-stack development lifecycle.",
        de: "Arbeit mit REST-APIs, React, TypeScript und serviceorientierten Anwendungskomponenten im gesamten Full-Stack-Entwicklungszyklus.",
      },
      {
        en: "Collaborated with cross-functional teams to debug, optimize, test, and deliver production-ready enterprise applications.",
        de: "Zusammenarbeit mit funktionsübergreifenden Teams beim Debuggen, Optimieren, Testen und Bereitstellen produktionsreifer Unternehmensanwendungen.",
      },
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "SQL",
      "Redis",
      "REST APIs",
      "React",
      "TypeScript",
    ],
  },
];