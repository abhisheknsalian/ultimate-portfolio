import { Lead } from "@/components/shared/typography";
import SectionHeading from "@/components/shared/section-heading";

export default function AboutContent() {
  return (
    <div className="max-w-3xl">
        <SectionHeading
            title="About"
            description="Building intelligent AI systems, scalable data platforms, and production-ready machine learning solutions."
        />

      <Lead className="mt-6">
        I&apos;m Abhishek Nagesh Salian, currently pursuing an M.Sc. in Data Science at the University of Europe for Applied Sciences in Berlin,Germany.
      </Lead>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        My interests span predictive machine learning, retrieval-augmented AI,
        scalable data pipelines, and modern cloud architectures. I enjoy taking
        projects from raw data all the way to production-ready applications.
      </p>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        I&apos;m currently looking for Working Student opportunities where I can
        contribute to impactful AI and data-driven products while continuing to
        grow as an engineer.
      </p>
    </div>
  );
}