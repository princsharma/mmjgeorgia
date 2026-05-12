"use client";

import { Check, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import MagneticButton from "@/components/motion/MagneticButton";

const FEATURES = [
  "Telehealth evaluation with a Georgia-licensed physician",
  "Personalized medical cannabis consultation",
  "Submission to the Georgia Low THC Oil Registry",
  "Renewal reminders and care concierge support",
  "HIPAA-compliant, end-to-end encrypted visit",
  "Same-day or next-day appointment availability",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">Transparent Pricing</span>
          <h2 id="pricing-heading" className="heading-primary">
            One simple <span className="accent-italic">Georgia</span> plan
          </h2>
          <p className="text-body mt-5 text-[var(--color-muted)]">
            One physician evaluation, one flat price — and you pay nothing if
            you&apos;re not approved. Renewals are even simpler.
          </p>
        </FadeIn>

        <FadeIn>
          <article
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-[0_30px_80px_-32px_rgba(3,60,63,0.22)] md:p-12"
            aria-label="Georgia Patient Plan"
          >
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="heading-secondary mb-2">
                  Georgia Patient Plan
                </h3>
                <p className="text-body text-[var(--color-muted)]">
                  Everything you need to apply for, receive, and renew your
                  Georgia Medical Marijuana Card.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-small text-[var(--color-body)]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[var(--color-surface-tint)] p-7 text-center">
                  <p className="eyebrow mb-2">Physician Evaluation</p>
                  <p
                    className="font-bold text-[var(--color-heading)]"
                    style={{
                      fontFamily: "var(--font-serif), serif",
                      fontSize: "clamp(3rem, 5vw, 4rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <span className="text-[var(--color-muted)] text-3xl align-top">
                      $
                    </span>
                    <span className="tabular-nums">149</span>
                  </p>
                  <p className="text-small text-[var(--color-muted)]">
                    One-time evaluation • Renewal $99
                  </p>

                  <a href="#apply" className="contents">
                    <MagneticButton type="button" className="btn-primary mt-6 w-full">
                      Begin Application
                    </MagneticButton>
                  </a>

                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    <ShieldCheck size={14} aria-hidden="true" />
                    Money-back if not approved
                  </p>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
