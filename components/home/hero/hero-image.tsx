"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/fade-up";

export default function HeroImage() {
  return (
    <FadeUp delay={0.35}>
      <div className="flex justify-center lg:justify-end">
        <div className="relative h-[600px] w-[460px]">
          {/* Background Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent blur-3xl" />

          {/* Card */}
          <div className="relative h-full w-full overflow-hidden rounded-[40px] border border-border bg-card/70 backdrop-blur-sm shadow-2xl">
            <Image
              src="/images/avatar-v2.png"
              alt="Abhishek Nagesh Salian"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-contain scale-125"
            />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}