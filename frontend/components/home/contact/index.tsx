"use client";

import Link from "next/link";

import Section from "@/components/layout/section";
import SectionHeading from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact">
      <SectionHeading
        title={t.contact.title}
        description={t.contact.description}
        className="mx-auto text-center"
      />

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link href={`mailto:${siteConfig.email}`}>
          <Button>{t.contact.email}</Button>
        </Link>

        <Link
          href={`https://github.com/${siteConfig.github}`}
          target="_blank"
        >
          <Button variant="outline">
            {t.contact.github}
          </Button>
        </Link>

        <Link
          href={`https://linkedin.com/in/${siteConfig.linkedin}`}
          target="_blank"
        >
          <Button variant="outline">
            {t.contact.linkedin}
          </Button>
        </Link>
      </div>
    </Section>
  );
}