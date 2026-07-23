import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Welcome"
              title="Building Intelligent Systems"
              description="This portfolio is currently under construction, but the foundation is already being built like a production application."
            />
          </Container>
        </Section>
      </main>
    </>
  );
}