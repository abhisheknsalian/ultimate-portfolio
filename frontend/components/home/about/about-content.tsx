"use client";

import SectionHeading from "@/components/shared/section-heading";
import { Lead } from "@/components/shared/typography";
import { useLanguage } from "@/i18n";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      <SectionHeading
        title={t.about.title}
        description={t.about.description}
      />

      <Lead className="mt-6">
        {t.about.intro}
      </Lead>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        {t.about.paragraph1}
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        {t.about.paragraph2}
      </p>
    </div>
  );
}