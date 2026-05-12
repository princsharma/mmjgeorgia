"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup, {
  staggerItemVariants,
} from "@/components/motion/StaggerGroup";

const WORDS = ["Apply", "for", "Your", "Georgia"];

export default function HeroAnimated() {
  const reduce = useReducedMotion();
  return (
    <section
      id="hero-animated"
      className="relative isolate overflow-hidden pb-24 pt-32 md:pt-40"
      aria-labelledby="hero-animated-heading"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f6faf8 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="eyebrow mb-6">Telehealth • Georgia Patients</span>

          <h1
            id="hero-animated-heading"
            className="display-xl mx-auto max-w-3xl"
          >
            <StaggerGroup
              as="div"
              stagger={0.08}
              className="flex flex-wrap justify-center gap-x-3"
            >
              {WORDS.map((word) => (
                <motion.span
                  key={word}
                  variants={staggerItemVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </StaggerGroup>
            <Reveal as="span" delay={0.45} className="block">
              <span className="accent-italic">Medical Marijuana Card</span>
            </Reveal>
          </h1>

          <p className="text-body mt-6 max-w-[60ch] text-[var(--color-muted)]">
            Faster, friendlier, and built around Georgia patients. Begin your
            evaluation and meet a licensed physician online — no clinic
            visit required.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.6,
              delay: reduce ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <MagneticButton type="button" className="btn-primary">
              Start My Evaluation
              <ArrowRight size={18} aria-hidden="true" />
            </MagneticButton>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works
              <ChevronDown size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
