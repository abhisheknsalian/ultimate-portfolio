import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

import ProjectGrid from "./project-grid";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Featured Work"
        description="A collection of AI, Machine Learning, and Data Engineering projects focused on solving real-world problems through scalable systems and production-ready applications."
      />

      <div className="mt-16">
        <ProjectGrid />
      </div>
    </Section>
  );
}