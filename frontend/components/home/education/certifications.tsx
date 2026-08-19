"use client";

import { certifications } from "@/data/certifications";
import { CardTitle } from "@/components/shared/typography";
import { useLanguage } from "@/i18n";

export default function Certifications() {
  const { language } = useLanguage();

  const isOddCount = certifications.length % 2 === 1;

  return (
    <div className="mt-16">
      <CardTitle size="lg">
        {language === "en" ? "Certifications" : "Zertifikate"}
      </CardTitle>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <div
            key={certification.name.en}
            className={`rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl ${
              isOddCount && index === certifications.length - 1
                ? "md:col-span-2"
                : ""
            }`}
          >
            <h4 className="text-base font-semibold leading-snug">
              {certification.name[language]}
            </h4>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {certification.issuer[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}