import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function DisplayHeading({
  children,
  className,
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl",
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
}: HeadingProps) {
  return (
    <p
      className={cn(
        "max-w-2xl text-lg leading-8 text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}