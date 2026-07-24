"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import FadeUp from "@/components/animations/fade-up";
import Badge from "@/components/shared/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <FadeUp>
      <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
        <Badge>{project.category}</Badge>

        <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Technology Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
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
              Highlights
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <Badge
                  key={metric}
                  className="border-primary/20 bg-primary/10 text-primary"
                >
                  {metric}
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
              View Repository
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </article>
    </FadeUp>
  );
}