"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "p";
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  className,
  as = "span",
}: RevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.span;

  if (reduce) {
    return (
      <MotionTag
        ref={ref as never}
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
      ref={ref as never}
      className={className}
      style={{ display: "inline-block", overflow: "hidden" }}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      animate={
        inView
          ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
          : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
