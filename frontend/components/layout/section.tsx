import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import Container from "./container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-24 md:py-32",
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}