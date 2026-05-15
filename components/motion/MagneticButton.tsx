"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { useRef, type ReactNode, type RefObject } from "react";

type BaseProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

type AsButtonProps = BaseProps &
  Omit<HTMLMotionProps<"button">, "children" | "ref"> & { href?: undefined };

type AsAnchorProps = BaseProps &
  Omit<HTMLMotionProps<"a">, "children" | "ref"> & { href: string };

type MagneticButtonProps = AsButtonProps | AsAnchorProps;

export default function MagneticButton(props: MagneticButtonProps) {
  const {
    children,
    strength = 8,
    className,
    onMouseMove,
    onMouseLeave,
    ...rest
  } = props;

  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) {
      (onMouseMove as ((e: React.MouseEvent<HTMLElement>) => void) | undefined)?.(
        event,
      );
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    const max = strength;
    x.set(Math.max(-max, Math.min(max, relX * 0.25)));
    y.set(Math.max(-max, Math.min(max, relY * 0.25)));
    (onMouseMove as ((e: React.MouseEvent<HTMLElement>) => void) | undefined)?.(
      event,
    );
  };

  const handleLeave = (event: React.MouseEvent<HTMLElement>) => {
    x.set(0);
    y.set(0);
    (onMouseLeave as ((e: React.MouseEvent<HTMLElement>) => void) | undefined)?.(
      event,
    );
  };

  const style = reduce ? undefined : { x: springX, y: springY };

  if ("href" in props && typeof props.href === "string") {
    const anchorRest = rest as Omit<
      HTMLMotionProps<"a">,
      "children" | "ref" | "className" | "style" | "onMouseMove" | "onMouseLeave"
    >;
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement | null>}
        className={className}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...anchorRest}
      >
        {children}
      </motion.a>
    );
  }

  const buttonRest = rest as Omit<
    HTMLMotionProps<"button">,
    "children" | "ref" | "className" | "style" | "onMouseMove" | "onMouseLeave"
  >;
  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement | null>}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...buttonRest}
    >
      {children}
    </motion.button>
  );
}
