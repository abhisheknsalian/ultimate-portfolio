"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { AvatarState } from "./avatar-state";

interface AvatarMotionProps {
  state: AvatarState;
  children: ReactNode;
}

export default function AvatarMotion({
  state,
  children,
}: AvatarMotionProps) {
  let animate = {};
  let transition = {};

  switch (state) {
    case AvatarState.THINKING:
      animate = {
        y: [0, -3, 0],
        rotate: [-1, 1, -1],
        scale: [1, 1.01, 1],
      };

      transition = {
        repeat: Infinity,
        duration: 2.2,
        ease: "easeInOut",
      };

      break;

    case AvatarState.SPEAKING:
      animate = {
        y: [0, -5, 0],
        rotate: [-0.8, 0.8, -0.8],
        scale: [1, 1.02, 1],
      };

      transition = {
        repeat: Infinity,
        duration: 0.45,
        ease: "easeInOut",
      };

      break;

    default:
      animate = {
        y: [0, -1, 0],
        scale: [1, 1.005, 1],
        rotate: 0,
      };

      transition = {
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      };
  }

  return (
    <motion.div
      className="relative h-full w-full"
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}