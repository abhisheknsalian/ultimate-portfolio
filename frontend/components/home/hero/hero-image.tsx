"use client";

import FadeUp from "@/components/animations/fade-up";

import { AssistantCard } from "./assistant";
import Avatar from "./avatar/Avatar";

export default function HeroImage() {
  return (
    <FadeUp delay={0.3}>
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[540px]">
          {/* Ambient Glow */}
          <div className="absolute inset-0 -z-20 rounded-[48px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-[80px]" />

          {/* Floating Glow */}
          <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Main Card */}
          <div className="overflow-hidden rounded-[38px] border border-border/60 bg-card/80 shadow-[0_35px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500">
            {/* Avatar */}
            <div className="relative flex h-[540px] items-end justify-center overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

              {/* Top Fade */}
              <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-background/10 to-transparent" />

              <Avatar />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* AI Assistant */}
            <AssistantCard />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}