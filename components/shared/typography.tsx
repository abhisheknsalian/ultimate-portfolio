import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function DisplayHeading({
  children,
  className,
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-6xl font-black tracking-tight md:text-7xl xl:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Lead({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "max-w-2xl text-xl leading-8 text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}