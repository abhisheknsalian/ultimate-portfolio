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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const { t, language } = useLanguage();

  return (
    <FadeUp>
      <article
        id={`project-${project.slug}`}
        data-project={project.slug}
        className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
      >
        <Badge>{project.category[language]}</Badge>

        <CardTitle className="mt-4">
          {project.title[language]}
        </CardTitle>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {project.description[language]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 5)
            .map((tech) => (
              <Badge
                key={tech}
                size="sm"
                className="bg-background/60"
              >
                {tech}
              </Badge>
            ))}
        </div>

        <div className="mt-6">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="group"
            >
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