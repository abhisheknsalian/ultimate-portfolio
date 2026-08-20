"use client";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import { useLanguage } from "@/i18n";
import { experiences } from "@/data/experience";

import ExperienceCard from "./experience-card";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading
        title={t.experience.title}
        description={t.experience.description}
      />

      <div className="mt-16 space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}
      </div>
    </Section>
  );
}