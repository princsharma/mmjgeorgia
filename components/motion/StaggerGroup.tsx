"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.18,
  as = "div",
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const container = {
    hidden: { opacity: reduce ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};
