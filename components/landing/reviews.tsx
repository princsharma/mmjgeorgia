"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

interface Review {
  name: string;
  city: string;
  date: string;
  quote: string;
}

const FEATURED: Review = {
  name: "Janelle T.",
  city: "Atlanta, GA",
  date: "March 2026",
  quote:
    "I had been told for years that nothing would help my intractable pain. The physician walked me through every detail of the Georgia registry, approved me the same week, and now I sleep through the night. I cannot thank this team enough.",
};

const REVIEWS: Review[] = [
  {
    name: "Marcus W.",
    city: "Savannah, GA",
    date: "February 2026",
    quote:
      "Booking, evaluation, certification — the whole process took five days. The doctor genuinely listened and never rushed me.",
  },
  {
    name: "Priya S.",
    city: "Augusta, GA",
    date: "January 2026",
    quote:
      "After my MS diagnosis I felt overwhelmed. This service made getting my Georgia card simple and dignified.",
  },
  {
    name: "Devon R.",
    city: "Macon, GA",
    date: "January 2026",
    quote:
      "Caring physicians, fair pricing, no hidden fees. Renewal was even easier than the first evaluation.",
  },
  {
    name: "Elena G.",
    city: "Atlanta, GA",
    date: "March 2026",
    quote:
      "The HIPAA-secure telehealth visit felt private and unrushed. Recommended without hesitation.",
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-[var(--color-accent)]"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "currentColor" : "transparent"}
          strokeWidth={1.6}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const reduce = useReducedMotion();
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">
            Georgia Patient Reviews
          </span>
          <h2 id="reviews-heading" className="heading-primary">
            Real stories from real{" "}
            <span className="accent-italic">Georgia</span> patients
          </h2>
        </FadeIn>

        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl p-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(32,183,128,0.16), rgba(3,60,63,0.06))",
            }}
          >
            <div className="surface-card relative p-8 md:p-12">
              <Stars rating={5} />
              <blockquote className="mt-5">
                <p
                  className="text-[var(--color-heading)]"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;{FEATURED.quote}&rdquo;
                </p>
                <footer className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    {FEATURED.name}
                  </span>
                  <span>{FEATURED.city}</span>
                  <span>•</span>
                  <span>{FEATURED.date}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </FadeIn>

        <div className="relative mt-10 overflow-hidden">
          <motion.ul
            drag={reduce ? false : "x"}
            dragConstraints={{ left: -800, right: 0 }}
            dragElastic={0.06}
            dragMomentum={false}
            className="flex w-max cursor-grab gap-5 active:cursor-grabbing"
          >
            {REVIEWS.map((r) => (
              <motion.li
                key={r.name}
                whileHover={reduce ? undefined : { y: -4 }}
                className="surface-card w-[88vw] shrink-0 p-6 sm:w-[420px]"
              >
                <Stars rating={5} />
                <p className="mt-3 text-small text-[var(--color-body)]">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    {r.name}
                  </span>
                  <span>{r.city}</span>
                  <span>•</span>
                  <span>{r.date}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Drag to pan
          </p>
        </div>
      </div>
    </section>
  );
}
