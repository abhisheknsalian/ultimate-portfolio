import Section from "@/components/layout/section";
import AboutContent from "./about-content";
import AboutStats from "./about-stats";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <AboutContent />
        <AboutStats />
      </div>
    </Section>
  );
}