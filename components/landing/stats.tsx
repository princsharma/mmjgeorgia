"use client";

import FadeIn from "@/components/motion/FadeIn";
import CountUp from "@/components/motion/CountUp";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { value: 12000, suffix: "+", label: "Georgia patients evaluated" },
  { value: 98, suffix: "%", label: "Approval rate" },
  { value: 24, suffix: "hr", label: "Average turnaround" },
  { value: 5, suffix: "+ yrs", label: "Serving Georgia" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative scroll-mt-24 py-16 md:py-20"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        By the numbers
      </h2>
      <div className="container-page">
        <FadeIn>
          <div
            className="grid grid-cols-2 divide-y divide-[var(--color-border)] rounded-3xl border border-[var(--color-border)] bg-[#fbf9f3] px-6 py-8 text-center md:grid-cols-4 md:divide-x md:divide-y-0 md:px-10 md:py-12"
            style={{
              boxShadow: "0 30px 80px -42px rgba(3, 60, 63, 0.22)",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-2 py-6 md:px-6 md:py-0">
                <p
                  className="font-bold text-[var(--color-heading)] tabular-nums"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    decimals={s.decimals}
                  />
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
