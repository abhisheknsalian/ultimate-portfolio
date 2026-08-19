"use client";

import { useLanguage } from "@/i18n";
import { projects } from "@/data/projects";
import { CardTitle } from "@/components/shared/typography";

import FeaturedProject from "./featured-project";
import ProjectCard from "./project-card";

export default function ProjectGrid() {
  const { t } = useLanguage();

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    );

  const heroProject = featuredProjects[0];
  const remainingFeaturedProjects = featuredProjects.slice(1);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="space-y-20">
      {heroProject && <FeaturedProject project={heroProject} />}

      {remainingFeaturedProjects.length > 0 && (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {remainingFeaturedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      )}

      {otherProjects.length > 0 && (
        <>
          <div>
            <CardTitle size="lg">
              {t.projects.other}
            </CardTitle>

            <p className="mt-2 text-muted-foreground">
              {t.projects.otherDescription}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}