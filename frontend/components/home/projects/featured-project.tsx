"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import FadeUp from "@/components/animations/fade-up";
import Badge from "@/components/shared/badge";
import { CardTitle } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import type { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  const { t, language } = useLanguage();

  return (
    <FadeUp>
      <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
        <Badge>{project.category[language]}</Badge>

        <CardTitle size="xl" className="mt-4">
          {project.title[language]}
        </CardTitle>

        <p className="mt-4 max-w-3xl text-[17px] leading-8 text-muted-foreground">
          {project.description[language]}
        </p>

        <div className="mt-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.projects.technologyStack}
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
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

        {project.metrics && (
          <div className="mt-8">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.projects.highlights}
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <Badge
                  key={metric.en}
                  size="sm"
                  className="border-primary/20 bg-primary/10 text-primary"
                >
                  {metric[language]}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group">
              <FaGithub className="mr-2 h-4 w-4" />

              {t.projects.repository}

              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </article>
    </FadeUp>
  );
}