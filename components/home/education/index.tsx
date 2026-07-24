import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import { education } from "@/data/education";
import EducationCard from "./education-card";
import Certifications from "./certifications";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        title="Education"
        description="Academic background that supports my work in artificial intelligence, machine learning, and data engineering."
      />

      <div className="mt-16 space-y-8">
        {education.map((item) => (
          <EducationCard
            key={`${item.institution}-${item.degree}`}
            education={item}
          />
        ))}
      </div>
      
      <Certifications />
    </Section>
  );
}