import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex items-center">
      <Container>
        <div className="grid min-h-[calc(100vh-64px)] items-center gap-24 lg:grid-cols-[1.2fr_0.8fr]">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}