import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}