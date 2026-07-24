import type { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            {education.degree}
          </h3>

          <p className="mt-2 text-lg text-primary">
            {education.institution}
          </p>
        </div>

        <div className="text-left text-sm text-muted-foreground md:text-right">
          <p>
            {education.start} — {education.end}
          </p>

          <p>{education.location}</p>
        </div>
      </div>
    </article>
  );
}