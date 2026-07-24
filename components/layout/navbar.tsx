import Link from "next/link";

import FadeUp from "@/components/animations/fade-up";
import ThemeToggle from "@/components/theme/theme-toggle";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import Container from "./container";

export default function Navbar() {
  return (
    <FadeUp>
      <header className="sticky top-4 z-50">
        <Container>
          <div className="flex h-14 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-6 shadow-xl backdrop-blur-2xl">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight transition-colors duration-300 hover:text-blue-500"
            >
              {siteConfig.shortName}
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-10">
              <nav className="hidden items-center gap-10 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      relative
                      text-sm
                      font-medium
                      text-muted-foreground
                      transition-colors
                      duration-200
                      hover:text-foreground
                      after:absolute
                      after:-bottom-1
                      after:left-0
                      after:h-0.5
                      after:w-0
                      after:rounded-full
                      after:bg-blue-500
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
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
    </FadeUp>
  );
}