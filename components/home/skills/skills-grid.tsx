import { skillCategories } from "@/data/skills";
import SkillCategory from "./skill-category";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
}