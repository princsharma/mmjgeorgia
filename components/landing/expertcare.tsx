"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Award, ShieldCheck, Stethoscope } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

export default function ExpertCare() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);

  return (
    <section
      ref={ref}
      id="expert-care"
      className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white md:py-32"
      aria-labelledby="expert-care-heading"
      style={{ background: "var(--gradient-dark)" }}
    >
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: blobY }}
        className="pointer-events-none absolute -left-32 top-1/4 h-[440px] w-[440px] opacity-[0.18] md:left-1/4 md:h-[560px] md:w-[560px]"
      >
        <Image
          src="/assets/hero/blob-emerald-1.svg"
          alt="Decorative emerald accent shape"
          title="Decorative accent"
          fill
          aria-hidden="true"
        />
      </motion.div>

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7" y={28}>
          <span className="eyebrow mb-5 inline-block">
            Expert Medical Care
          </span>
          <h2
            id="expert-care-heading"
            className="heading-primary text-white"
            style={{ color: "#ffffff" }}
          >
            Care from physicians who{" "}
            <span className="accent-italic">understand</span> your story
          </h2>
          <p className="text-body-inv mt-6 max-w-xl">
            Our Georgia-licensed doctors specialize in compassionate, evidence-
            informed medical cannabis evaluations. Every consultation is private,
            unhurried, and entirely focused on your wellbeing.
          </p>

          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {[
              {
                Icon: ShieldCheck,
                label: "HIPAA-Secure",
                sub: "End-to-end encrypted telehealth",
              },
              {
                Icon: Stethoscope,
                label: "GA-Licensed",
                sub: "Verified Georgia physicians",
              },
              {
                Icon: Award,
                label: "5+ Years",
                sub: "Serving Georgia patients",
              },
            ].map((feat) => (
              <li
                key={feat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
              >
                <feat.Icon
                  size={22}
                  className="mb-3 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <p className="text-base font-semibold text-white">
                  {feat.label}
                </p>
                <p className="mt-1 text-sm text-white/70">{feat.sub}</p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-5" y={28}>
          <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(32,183,128,0.45), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-3 overflow-hidden rounded-full ring-4 ring-[var(--color-accent)]/70"
              style={{ boxShadow: "0 30px 90px -20px rgba(0,0,0,0.45)" }}
            >
              <Image
                src="/assets/doctors/doc-1.svg"
                alt="Portrait of Dr. Aisha Patel, Georgia-licensed medical cannabis physician"
                title="Georgia-licensed cannabis physician"
                fill
                sizes="(max-width: 768px) 18rem, 24rem"
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-dark)] shadow-lg">
              GA Lic. # MD-44218
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
