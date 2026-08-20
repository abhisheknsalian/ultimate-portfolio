"use client";

import Badge from "@/components/shared/badge";
import { CardTitle } from "@/components/shared/typography";
import { useLanguage } from "@/i18n";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const { t, language } = useLanguage();

  return (
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <CardTitle size="lg">
            {experience.role[language]}
          </CardTitle>

          <p className="mt-2 text-lg text-primary">
            {experience.company}
          </p>
        </div>

        <div className="text-left text-sm text-muted-foreground md:text-right">
          <p>
            {experience.startDate} — {experience.endDate}
          </p>

          <p>{experience.location[language]}</p>
        </div>
      </div>

      <ul className="mt-8 space-y-3">
        {experience.description.map((item) => (
          <li
            key={item.en}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

            <span className="leading-7 text-muted-foreground">
              {item[language]}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {t.projects.technologyStack}
        </h4>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge
              key={tech}
              size="sm"
              className="bg-background/60"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}