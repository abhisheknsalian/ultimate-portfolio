"use client";

import { CardTitle } from "@/components/shared/typography";
import { useLanguage } from "@/i18n";
import type { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  const { language } = useLanguage();

  return (
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <CardTitle size="lg">
            {education.degree[language]}
          </CardTitle>

          <p className="mt-2 text-lg text-primary">
            {education.institution[language]}
          </p>
        </div>

        <div className="text-left text-sm text-muted-foreground md:text-right">
          <p>
            {education.start} — {education.end}
          </p>

          <p>{education.location[language]}</p>
        </div>
      </div>
    </article>
  );
}