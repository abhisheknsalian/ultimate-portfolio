"use client";

import { Sparkles } from "lucide-react";

import FadeUp from "@/components/animations/fade-up";
import Badge from "@/components/shared/badge";
import {
  DisplayHeading,
  Lead,
} from "@/components/shared/typography";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/data/site";

import HeroButtons from "./hero-buttons";
import HeroSocials from "./hero-socials";

export default function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      <FadeUp>
        <Badge className="gap-2">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span>{t.hero.available}</span>
        </Badge>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {t.hero.greeting}
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <DisplayHeading className="mt-2">
          <>
            {siteConfig.firstName}
            <br />
            {siteConfig.lastName}
          </>
        </DisplayHeading>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p className="mt-6 text-2xl font-semibold tracking-tight">
          {t.hero.role}
        </p>
      </FadeUp>

      <FadeUp delay={0.4}>
        <Lead className="mt-8">
          {t.hero.headline}
        </Lead>
      </FadeUp>

      <FadeUp delay={0.5}>
        <HeroButtons />
      </FadeUp>

      <FadeUp delay={0.6}>
        <HeroSocials />
      </FadeUp>
    </div>
  );
}