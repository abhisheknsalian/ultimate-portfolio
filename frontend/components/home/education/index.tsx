"use client";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import { useLanguage } from "@/i18n";
import { education } from "@/data/education";

import EducationCard from "./education-card";
import Certifications from "./certifications";

export default function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education">
      <SectionHeading
        title={t.education.title}
        description={t.education.description}
      />

      <div className="mt-16 space-y-8">
        {education.map((item) => (
            <EducationCard
    key={`${item.institution.en}-${item.start}`}
    education={item}
  />
        ))}
      </div>

      <Certifications />
    </Section>
  );
}