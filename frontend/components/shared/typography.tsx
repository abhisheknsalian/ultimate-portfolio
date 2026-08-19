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

export function SectionTitle({
  children,
  className,
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold tracking-tight md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

interface CardTitleProps extends TypographyProps {
  /**
   * "default" for compact grid cards (project, skill category).
   * "lg" for content-rich record cards (experience, education).
   * "xl" for the single featured/flagship card on a page.
   */
  size?: "default" | "lg" | "xl";
}

const CARD_TITLE_SIZE = {
  default: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
} as const;

export function CardTitle({
  children,
  className,
  size = "default",
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "font-bold tracking-tight",
        CARD_TITLE_SIZE[size],
        className
      )}
    >
      {children}
    </h3>
  );
}