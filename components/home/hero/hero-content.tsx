import { Sparkles } from "lucide-react";

import Badge from "@/components/shared/badge";
import { DisplayHeading, Lead } from "@/components/shared/typography";
import { siteConfig } from "@/data/site";

import HeroButtons from "./hero-buttons";
import HeroSocials from "./hero-socials";

export default function HeroContent() {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge className="gap-2">
        <Sparkles className="h-4 w-4 text-blue-500" />
        <span>{siteConfig.availability}</span>
      </Badge>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            HELLO,
        </p>

      <DisplayHeading className="mt-2">
        <>
          {siteConfig.firstName}
          <br />
          {siteConfig.lastName}
        </>
      </DisplayHeading>

      <p className="mt-6 text-2xl font-semibold tracking-tight">
        {siteConfig.role}
      </p>

      <Lead className="mt-8">
        {siteConfig.headline}
      </Lead>

      <HeroButtons />

      <HeroSocials />
    </div>
  );
}