"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import FadeIn from "@/components/motion/FadeIn";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up and share basic information to begin your Georgia medical marijuana card evaluation.",
  },
  {
    number: "02",
    title: "Schedule Your Consultation",
    description:
      "Choose a convenient time to meet online with a Georgia-licensed medical cannabis doctor.",
  },
  {
    number: "03",
    title: "Attend Your MMJ Evaluation",
    description:
      "Meet your doctor via secure video consultation; they'll review your medical history and qualifying condition.",
  },
  {
    number: "04",
    title: "Receive Your Card",
    description:
      "If approved, your physician's certification is submitted to the state, and you'll receive your Georgia Medical Marijuana Card.",
  },
];

function StepNumberCircle({
  index,
  inView,
}: {
  index: number;
  inView: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 18,
        delay: reduce ? 0 : index * 0.12,
      }}
      className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white shadow-[0_18px_40px_-22px_rgba(32,183,128,0.45)]"
      aria-hidden="true"
    >
      <span className="text-base font-bold text-[var(--color-accent)] tabular-nums">
        {STEPS[index].number}
      </span>
    </motion.div>
  );
}

export default function Steps() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const trackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const drawProgress = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1200, 1200] : [0, 1200],
  );

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="steps-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">How It Works</span>
          <h2 id="steps-heading" className="heading-primary">
            Four simple steps to your{" "}
            <span className="accent-italic">card</span>
          </h2>
          <p className="text-body mt-5 text-[var(--color-muted)]">
            From your first click to your approved certification — most
            patients complete the process in under a week.
          </p>
        </FadeIn>

        <div
          ref={trackRef}
          className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 4"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-1 w-full lg:block"
          >
            <motion.line
              x1="0"
              y1="2"
              x2={drawProgress}
              y2="2"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 4 1200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 left-8 top-0 h-full w-1 lg:hidden"
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2={drawProgress}
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 left-1/2 hidden -translate-x-1/2 select-none text-[8rem] font-bold leading-none lg:block"
                style={{
                  fontFamily: "var(--font-serif), serif",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(3,60,63,0.08)",
                }}
              >
                {step.number}
              </span>
              <StepNumberCircle index={i} inView={inView} />
              <FadeIn delay={i * 0.08 + 0.1} className="mt-32 lg:mt-28">
                <h3 className="heading-tertiary mb-3">{step.title}</h3>
                <p className="text-small text-[var(--color-muted)]">
                  {step.description}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>

        <FadeIn className="mt-16 flex justify-center">
          <Link
            href="/#apply"
            title="Start your Georgia Medical Marijuana Card evaluation"
            className="btn-primary"
          >
            Start My Evaluation
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
