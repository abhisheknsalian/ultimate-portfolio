import Badge from "@/components/shared/badge";
import type { SkillCategory as SkillCategoryType } from "@/types/skill";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({
  category,
}: SkillCategoryProps) {
  return (
    <article className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold">
        {category.title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}