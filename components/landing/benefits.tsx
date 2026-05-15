"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

interface Benefit {
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "Legal access to medical cannabis",
    description:
      "Your Georgia Low THC Oil Registry card gives you compliant access to medical cannabis under state law.",
  },
  {
    title: "Doctor-supervised wellness",
    description:
      "Receive guidance from Georgia-licensed physicians experienced in cannabinoid therapy.",
  },
  {
    title: "Discreet, HIPAA-compliant telehealth",
    description:
      "Evaluations are entirely private, encrypted end-to-end, and never sold or shared.",
  },
  {
    title: "Same-day evaluation slots",
    description:
      "Most Georgia patients are seen by a physician within 24 hours of applying.",
  },
  {
    title: "Money-back guarantee",
    description:
      "If our physician cannot approve your certification, you pay nothing — no questions asked.",
  },
  {
    title: "Year-round patient support",
    description:
      "Our care concierge is available throughout the renewal cycle to keep you certified without disruption.",
  },
];

function BenefitRow({ benefit, index }: { benefit: Benefit; index: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration: reduce ? 0 : 0.5,
        delay: reduce ? 0 : index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex gap-5 border-b border-[var(--color-border)] py-7 last:border-b-0"
    >
      <motion.span
        initial={{
          backgroundColor: "rgba(229,231,235,0.6)",
          color: "#9ca3af",
        }}
        animate={
          inView
            ? {
                backgroundColor: "var(--color-accent)",
                color: "#ffffff",
              }
            : undefined
        }
        transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        aria-hidden="true"
      >
        <Check size={16} strokeWidth={3} />
      </motion.span>
      <div>
        <h3 className="heading-quaternary mb-1.5">{benefit.title}</h3>
        <p className="text-small text-[var(--color-muted)]">
          {benefit.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="benefits-heading"
    >
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <FadeIn className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow mb-4 inline-block">Why Patients Choose Us</span>
            <h2 id="benefits-heading" className="heading-primary">
              Built for Georgia patients,{" "}
              <span className="accent-italic">from start to renewal</span>
            </h2>
            <p className="text-body mt-5 text-[var(--color-muted)]">
              We help thousands of Georgia residents access medical cannabis
              through licensed physicians every year — from the first
              evaluation to annual renewal.
            </p>
            <Link
              href="/#apply"
              title="Apply for your Georgia Medical Marijuana Card"
              className="btn-primary mt-8 inline-flex"
            >
              Apply for Your MMJ Card
            </Link>
          </div>
        </FadeIn>
        <ul className="lg:col-span-7">
          {BENEFITS.map((b, i) => (
            <BenefitRow key={b.title} benefit={b} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
