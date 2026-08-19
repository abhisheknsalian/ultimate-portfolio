import Section from "@/components/layout/section";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="flex min-h-[90vh] items-center"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
        <HeroContent />
        <HeroImage />
      </div>
    </Section>
  );
}