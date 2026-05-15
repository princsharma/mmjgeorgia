"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/motion/MagneticButton";
import Parallax from "@/components/motion/Parallax";
import FormWrapper from "@/components/landing/formwrapper";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-24 pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f6faf8 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[80vh] w-[80vh] max-w-3xl rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(32,183,128,0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Parallax
        offset={40}
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-[420px] w-[420px] md:-left-20 md:h-[520px] md:w-[520px]"
      >
        <div className="blob-drift-a h-full w-full">
          <Image
            src="/assets/hero/blob-emerald-1.svg"
            alt="Decorative emerald accent shape"
            title="Decorative accent"
            fill
            priority
            aria-hidden="true"
            className="opacity-[0.08]"
          />
        </div>
      </Parallax>

      <Parallax
        offset={-50}
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[460px] w-[460px] md:h-[580px] md:w-[580px]"
      >
        <div className="blob-drift-b h-full w-full">
          <Image
            src="/assets/hero/blob-emerald-2.svg"
            alt="Decorative emerald accent shape"
            title="Decorative accent"
            fill
            aria-hidden="true"
            className="opacity-[0.08]"
          />
        </div>
      </Parallax>

      <div className="grain-overlay -z-10" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <span className="pill mb-7">
              <span
                className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              Georgia • Apply Online
            </span>

            <h1 id="hero-heading" className="display-xl">
              Apply for Your Georgia{" "}
              <span className="accent-italic">Medical Marijuana Card</span>{" "}
              Online
            </h1>

            <p className="text-body mt-6 max-w-[58ch] text-[var(--color-muted)]">
              Get evaluated by Georgia-licensed physicians and apply for your
              medical marijuana card online through our secure,
              HIPAA-compliant telehealth platform.
            </p>

            <p className="text-small mt-3 max-w-[56ch] text-[var(--color-muted)]">
              Approved patients receive a doctor-certified recommendation
              enabling legal access to medical cannabis from licensed Georgia
              dispensaries.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.6,
                delay: reduce ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton
                href="#apply"
                title="Start your Georgia Medical Marijuana Card application"
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("apply")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
              >
                Start My Evaluation
                <ArrowRight size={18} aria-hidden="true" />
              </MagneticButton>
              <a
                href="#how-it-works"
                title="How the Georgia Medical Marijuana Card process works"
                className="btn-ghost"
                aria-label="See how it works"
              >
                See How It Works
                <ChevronDown size={18} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.6,
                delay: reduce ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-2.5"
              aria-label="Trust indicators"
            >
              {[
                "HIPAA-Compliant",
                "Money-Back Guarantee",
                "Georgia-Licensed Doctors",
              ].map((label) => (
                <li key={label}>
                  <span className="pill">
                    <ShieldCheck
                      size={14}
                      className="text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            id="apply"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.6,
              delay: reduce ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 scroll-mt-28"
          >
            <FormWrapper />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
