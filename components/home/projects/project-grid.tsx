import FeaturedProject from "./featured-project";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
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
      {/* Hero Project */}
      {heroProject && <FeaturedProject project={heroProject} />}

      {/* Remaining Featured Projects */}
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

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <div className="pt-8">
            <h3 className="text-2xl font-bold tracking-tight">
              Other Projects
            </h3>

            <p className="mt-2 text-muted-foreground">
              Additional machine learning and data science projects.
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