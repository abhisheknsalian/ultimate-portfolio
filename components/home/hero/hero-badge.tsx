import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
      <Sparkles className="h-4 w-4 text-blue-500" />

      <span>Available for Working Student Opportunities</span>
    </div>
  );
}