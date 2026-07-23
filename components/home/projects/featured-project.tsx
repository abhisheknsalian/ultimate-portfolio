import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
      {/* Category */}
      <Badge>{project.category}</Badge>

      {/* Title */}
      <h3 className="mt-4 text-3xl font-bold tracking-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
        {project.description}
      </p>

      {/* Technology Stack */}
      <div className="mt-8">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          Technology Stack
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} className="bg-transparent">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Highlights */}
      {project.metrics && (
        <div className="mt-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
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

      {/* Repository */}
      <div className="mt-8">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <FaGithub className="mr-2 h-4 w-4" />
            View Repository
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </article>
  );
}