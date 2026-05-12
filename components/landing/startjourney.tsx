"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import MagneticButton from "@/components/motion/MagneticButton";
import Parallax from "@/components/motion/Parallax";

export default function StartJourney() {
  const scrollToApply = () => {
    document
      .getElementById("apply")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="start-journey"
      className="relative isolate scroll-mt-24 overflow-hidden py-24 md:py-32"
      aria-labelledby="start-journey-heading"
      style={{ background: "var(--gradient-wash)" }}
    >
      <Parallax
        offset={40}
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[400px] w-[400px] md:h-[520px] md:w-[520px]"
      >
        <div className="blob-drift-b h-full w-full">
          <Image
            src="/assets/hero/blob-emerald-2.svg"
            alt=""
            fill
            aria-hidden="true"
            role="presentation"
            className="opacity-70"
          />
        </div>
      </Parallax>

      <div className="container-page relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-4 inline-block">Ready when you are</span>
          <h2
            id="start-journey-heading"
            className="heading-primary"
            style={{ fontStyle: "italic" }}
          >
            Begin your <span className="accent-italic">journey</span> with a
            licensed Georgia physician today.
          </h2>
          <p className="text-body mt-6 text-[var(--color-muted)]">
            It only takes a few minutes to start. We&apos;ll guide you through
            every step — from your first form to your approved certification.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton
              type="button"
              className="btn-primary px-9 py-4 text-base"
              onClick={scrollToApply}
            >
              Start My Evaluation
              <ArrowRight size={18} aria-hidden="true" />
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
