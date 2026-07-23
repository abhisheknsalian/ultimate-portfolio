import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import SkillsGrid from "./skills-grid";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Technical Expertise"
        description="Technologies, frameworks, and tools I use to build machine learning models, AI applications, and scalable data engineering solutions."
      />

      <div className="mt-16">
        <SkillsGrid />
      </div>
    </Section>
  );
}