"use client";

import Image from "next/image";

import AvatarMotion from "./avatar-motion";
import { useAvatar } from "./use-avatar";

export default function Avatar() {
  const state = useAvatar((store) => store.state);

  return (
    <AvatarMotion state={state}>
      <Image
        src="/images/avatar-v2.png"
        alt="Abhishek Nagesh Salian"
        fill
        priority
        sizes="(max-width:768px) 100vw, 540px"
        className="object-contain scale-[1.32] translate-y-8 transition-transform duration-700"
      />
    </AvatarMotion>
  );
}