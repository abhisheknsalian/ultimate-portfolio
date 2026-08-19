"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/i18n";
import { siteConfig } from "@/data/site";

import Container from "./container";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold">
              {siteConfig.firstName} {siteConfig.lastName}
            </h3>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
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
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <FaGithub className="h-5 w-5" />
            </Link>

            <Link
              href={`https://linkedin.com/in/${siteConfig.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>

            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
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