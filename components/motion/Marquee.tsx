"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  className?: string;
  fadeEdges?: boolean;
}

export default function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = "left",
  className,
  fadeEdges = true,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const distance = direction === "left" ? "-50%" : "50%";
  const animate = reduce
    ? { x: "0%" }
    : { x: ["0%", distance] };
  const transition = reduce
    ? { duration: 0 }
    : {
        duration: speed,
        ease: "linear" as const,
        repeat: Infinity,
      };

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => pauseOnHover && setHovered(true)}
      onMouseLeave={() => pauseOnHover && setHovered(false)}
      aria-hidden="true"
    >
      {fadeEdges && (
        <>
          <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
        </>
      )}
      <motion.div
        className="flex w-max flex-nowrap items-center gap-12"
        animate={animate}
        transition={transition}
        style={{ animationPlayState: hovered ? "paused" : "running" }}
      >
        <div className="flex flex-nowrap items-center gap-12">{children}</div>
        <div className="flex flex-nowrap items-center gap-12">{children}</div>
      </motion.div>
    </div>
  );
}
