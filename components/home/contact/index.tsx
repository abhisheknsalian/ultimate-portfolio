import Link from "next/link";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Let's Build Something Together"
        description="I'm currently looking for Working Student opportunities in AI, Machine Learning, and Data Engineering. Feel free to reach out if you'd like to discuss a role, collaboration, or project."
      />

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href={`mailto:${siteConfig.email}`}>
          <Button>Email</Button>
        </Link>

        <Link
          href={`https://github.com/${siteConfig.github}`}
          target="_blank"
        >
          <Button variant="outline">GitHub</Button>
        </Link>

        <Link
          href={`https://linkedin.com/in/${siteConfig.linkedin}`}
          target="_blank"
        >
          <Button variant="outline">LinkedIn</Button>
        </Link>

        <Link href={siteConfig.resume} target="_blank">
          <Button variant="outline">Resume</Button>
        </Link>
      </div>
    </Section>
  );
}