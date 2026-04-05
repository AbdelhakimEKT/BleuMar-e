"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

type HomeRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "soft" | "panel";
};

const variants = {
  default: {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  },
  soft: {
    hidden: { opacity: 0, y: 18, scale: 0.992, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
  },
  panel: {
    hidden: { opacity: 0, y: 22, scale: 0.978, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
  }
} as const;

export function HomeReveal({
  children,
  className,
  delay = 0,
  variant = "default"
}: HomeRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[variant]}
      transition={{
        delay,
        duration: 0.82,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
