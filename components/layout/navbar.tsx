import Link from "next/link";

import Container from "./container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-6 shadow-lg backdrop-blur-xl">
          <Link
            href="/"
            className="text-xl font-black tracking-tight transition-opacity hover:opacity-80"
          >
            {siteConfig.shortName}
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}