"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import FadeUp from "@/components/animations/fade-up";
import Badge from "@/components/shared/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <FadeUp>
      <article className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
        <Badge>{project.category}</Badge>

        <h3 className="mt-4 text-xl font-extrabold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge
              key={tech}
              className="bg-background/60 text-xs"
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
              Repository
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </article>
    </FadeUp>
  );
}