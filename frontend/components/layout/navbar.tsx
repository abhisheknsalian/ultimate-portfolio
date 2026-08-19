"use client";

import Link from "next/link";

import FadeUp from "@/components/animations/fade-up";
import LanguageToggle from "@/components/shared/language-toggle";
import ThemeToggle from "@/components/theme/theme-toggle";
import { useLanguage } from "@/i18n";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";

import Container from "./container";

export default function Navbar() {
  const { t } = useLanguage();

  const activeSection = useActiveSection();

  return (
    <FadeUp>
      <header className="sticky top-4 z-50">
        <Container>
          <div className="flex h-14 items-center justify-between rounded-2xl border border-border/50 bg-background/80 px-6 shadow-xl backdrop-blur-2xl">
            <Link
              href="/"
              className="rounded-md text-xl font-extrabold tracking-tight transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {siteConfig.shortName}
            </Link>

            <div className="flex items-center gap-6">
              <nav className="hidden items-center gap-2 rounded-full bg-muted/40 p-1 md:flex">
                {navigation.map((item) => {
                  const id = item.href.replace("#", "");

                  const isActive =
                    activeSection !== "hero" &&
                    activeSection === id;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      scroll
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {t.navbar[item.key]}
                    </Link>
                  );
                })}
              </nav>

              <LanguageToggle />

              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>
    </FadeUp>
  );
}