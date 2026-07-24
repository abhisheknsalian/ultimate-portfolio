import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            {experience.role}
          </h3>

          <p className="mt-2 text-lg text-primary">
            {experience.company}
          </p>
        </div>

        <div className="text-left text-sm text-muted-foreground md:text-right">
          <p>
            {experience.startDate} — {experience.endDate}
          </p>

          <p>{experience.location}</p>
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {experience.description.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

            <span className="leading-7 text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}