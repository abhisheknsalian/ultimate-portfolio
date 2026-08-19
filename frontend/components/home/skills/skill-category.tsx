"use client";

import Badge from "@/components/shared/badge";
import { CardTitle } from "@/components/shared/typography";
import { useLanguage } from "@/i18n";
import type { SkillCategory } from "@/types/skill";

interface SkillCategoryProps {
  category: SkillCategory;
}

export default function SkillCategory({
  category,
}: SkillCategoryProps) {
  const { language } = useLanguage();

  return (
    <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <CardTitle>{category.title[language]}</CardTitle>

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