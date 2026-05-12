"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { useRef, type ReactNode } from "react";

interface MagneticButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 8,
  className,
  onMouseMove,
  onMouseLeave,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (reduce || !ref.current) {
      onMouseMove?.(event);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    const max = strength;
    x.set(Math.max(-max, Math.min(max, relX * 0.25)));
    y.set(Math.max(-max, Math.min(max, relY * 0.25)));
    onMouseMove?.(event);
  };

  const handleLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    x.set(0);
    y.set(0);
    onMouseLeave?.(event);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      style={reduce ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
