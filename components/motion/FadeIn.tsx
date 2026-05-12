"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
  duration = 0.6,
  as = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount: 0.2 });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return (
      <MotionTag
        ref={ref}
        className={className}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.001 }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
