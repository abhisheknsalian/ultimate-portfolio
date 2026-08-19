"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/i18n";
import { siteConfig } from "@/data/site";

import Container from "./container";

const ICON_LINK_CLASS =
  "rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-8 border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">
              {siteConfig.firstName} {siteConfig.lastName}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground md:mx-0">
              {t.footer.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link
              href={`https://github.com/${siteConfig.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={ICON_LINK_CLASS}
            >
              <FaGithub className="h-5 w-5" />
            </Link>

            <Link
              href={`https://linkedin.com/in/${siteConfig.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={ICON_LINK_CLASS}
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>

            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className={ICON_LINK_CLASS}
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.firstName}{" "}
          {siteConfig.lastName}
          <br />
          {t.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}