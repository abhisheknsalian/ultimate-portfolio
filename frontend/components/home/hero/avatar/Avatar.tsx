"use client";

import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/images/avatar-v2.png"
      alt="Abhishek Nagesh Salian"
      fill
      priority
      sizes="(max-width:768px) 100vw, 540px"
      className="object-contain scale-[1.32] translate-y-8 transition-transform duration-700"
    />
  );
}