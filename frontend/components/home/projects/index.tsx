"use client";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";
import { useLanguage } from "@/i18n";

import ProjectGrid from "./project-grid";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <SectionHeading
        title={t.projects.title}
        description={t.projects.description}
      />

      <div className="mt-16">
        <ProjectGrid />
      </div>
    </Section>
  );
}