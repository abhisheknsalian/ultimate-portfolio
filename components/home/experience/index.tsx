import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import { experiences } from "@/data/experience";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Professional Experience"
        description="Professional experience building backend systems, enterprise applications, and data-driven software solutions."
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