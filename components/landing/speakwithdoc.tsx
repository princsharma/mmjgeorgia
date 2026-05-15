"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import MagneticButton from "@/components/motion/MagneticButton";
import { SITE_CONFIG } from "@/lib/seo";

export default function SpeakWithDoc() {
  return (
    <section
      id="speak-with-doc"
      className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white md:py-28"
      aria-labelledby="speak-with-doc-heading"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] opacity-[0.18]"
        aria-hidden="true"
      >
        <Image
          src="/assets/hero/blob-emerald-2.svg"
          alt="Decorative emerald accent shape"
          title="Decorative accent"
          fill
          aria-hidden="true"
        />
      </div>
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] opacity-[0.18]"
        aria-hidden="true"
      >
        <Image
          src="/assets/hero/blob-emerald-1.svg"
          alt="Decorative emerald accent shape"
          title="Decorative accent"
          fill
          aria-hidden="true"
        />
      </div>

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <span className="eyebrow mb-4 inline-block">
            Prefer to talk first?
          </span>
          <h2
            id="speak-with-doc-heading"
            className="heading-primary text-white"
            style={{
              color: "#ffffff",
              fontStyle: "italic",
            }}
          >
            Speak with a{" "}
            <span className="not-italic accent-italic">Georgia</span> care
            specialist now.
          </h2>
          <p className="text-body-inv mt-5 max-w-xl">
            Our patient care team is standing by Monday–Saturday to walk you
            through eligibility, scheduling, or anything else you&apos;d like
            to know before you apply.
          </p>
        </FadeIn>

        <FadeIn className="lg:col-span-5" delay={0.15}>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <MagneticButton
              href={`tel:${SITE_CONFIG.phoneTel}`}
              title="Call our Georgia Medical Marijuana Card team"
              className="btn-primary justify-center gap-3 px-7 py-4 text-lg"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone size={20} strokeWidth={2.4} aria-hidden="true" />
              <span className="tabular-nums">{SITE_CONFIG.phone}</span>
            </MagneticButton>
            <a
              href="/contact-us"
              title="Contact our Georgia patient care team"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Or send us a message
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
