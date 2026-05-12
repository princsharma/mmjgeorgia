"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  separator?: string;
}

function formatNumber(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals);
  const [whole, frac] = fixed.split(".");
  const withSep = whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return frac ? `${withSep}.${frac}` : withSep;
}

export default function CountUp({
  to,
  from = 0,
  suffix = "",
  prefix = "",
  duration = 1.6,
  decimals = 0,
  className,
  separator = ",",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(from);
  const initialValue = reduce ? to : from;
  const [display, setDisplay] = useState(() =>
    formatNumber(initialValue, decimals, separator),
  );

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatNumber(latest, decimals, separator));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration, decimals, separator, motionValue]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
