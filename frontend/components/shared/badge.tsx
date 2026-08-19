import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /**
   * "default" for prominent pills (category tags, eyebrow labels).
   * "sm" for compact metadata chips (technology stacks, metrics).
   */
  size?: "default" | "sm";
}

export default function Badge({
  children,
  className,
  size = "default",
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card",
        size === "sm"
          ? "px-3 py-1 text-xs"
          : "px-4 py-2 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}