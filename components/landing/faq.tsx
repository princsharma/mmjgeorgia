"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { FAQ_ITEMS, type FaqItem } from "@/lib/faqData";

function FaqRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  const id = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className="accordion-row">
      <button
        id={buttonId}
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:bg-[var(--color-surface-tint)]"
      >
        <span className="heading-tertiary pr-4 text-[var(--color-heading)]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
            open
              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
              : "border-[var(--color-border)] text-[var(--color-accent)]"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-7 pr-12 text-body text-[var(--color-muted)]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">Common Questions</span>
          <h2 id="faq-heading" className="heading-primary">
            Frequently asked{" "}
            <span className="accent-italic">questions</span>
          </h2>
          <p className="text-body mt-5 text-[var(--color-muted)]">
            Everything Georgia patients ask about evaluation, eligibility, and
            the state Low THC Oil Registry.
          </p>
        </FadeIn>
        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item, i) => (
            <FaqRow
              key={item.question}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={(idx) => setOpenIndex((cur) => (cur === idx ? null : idx))}
            />
          ))}
        </div>

        <FadeIn className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-small text-[var(--color-muted)]">
            Still have questions? You can also start your evaluation and a
            specialist will help along the way.
          </p>
          <Link
            href="/#apply"
            title="Start your Georgia Medical Marijuana Card application"
            className="btn-primary"
          >
            Apply Now
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
