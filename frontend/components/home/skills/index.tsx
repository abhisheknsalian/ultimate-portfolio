"use client";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";
import { useLanguage } from "@/i18n";

import SkillsGrid from "./skills-grid";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeading
        title={t.skills.title}
        description={t.skills.description}
      />

      <div className="mt-16">
        <SkillsGrid />
      </div>
    </Section>
  );
}