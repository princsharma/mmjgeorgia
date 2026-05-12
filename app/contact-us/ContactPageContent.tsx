"use client";

import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import QueryForm from "@/components/contact/queryForm";
import { SITE_CONFIG } from "@/lib/seo";

const CONTACT_METHODS = [
  {
    Icon: Phone,
    label: "Call us",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phoneTel}`,
    note: "Mon–Sat, 8am–8pm ET",
  },
  {
    Icon: Mail,
    label: "Email us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    note: "Replies within one business hour",
  },
  {
    Icon: MapPin,
    label: "Serving",
    value: "All 159 Georgia counties",
    note: "100% telehealth",
  },
];

export default function ContactPageContent() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden pb-16 pt-32 md:pt-40"
        aria-labelledby="contact-heading"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f6faf8 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="pill mb-6 mx-auto inline-flex">
              <span
                className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              Patient Care • Georgia
            </span>
            <h1 id="contact-heading" className="display-xl">
              We are here for{" "}
              <span className="accent-italic">Georgia patients</span>
            </h1>
            <p className="text-body mt-5 text-[var(--color-muted)]">
              Have a question about eligibility, scheduling, or your Georgia
              Low THC Oil Registry application? A licensed patient-care
              specialist will be glad to help.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-12 md:py-16" aria-labelledby="methods-heading">
        <h2 id="methods-heading" className="sr-only">
          Ways to reach us
        </h2>
        <div className="container-page grid gap-5 md:grid-cols-3">
          {CONTACT_METHODS.map((m) => (
            <FadeIn key={m.label} className="h-full">
              <div className="surface-card flex h-full flex-col gap-2 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <m.Icon size={20} aria-hidden="true" />
                </span>
                <p className="mt-3 eyebrow">{m.label}</p>
                {m.href ? (
                  <a
                    href={m.href}
                    className="heading-tertiary text-[var(--color-heading)] hover:text-[var(--color-accent)]"
                  >
                    {m.value}
                  </a>
                ) : (
                  <p className="heading-tertiary text-[var(--color-heading)]">
                    {m.value}
                  </p>
                )}
                <p className="text-small text-[var(--color-muted)]">{m.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        className="relative py-16 md:py-24"
        aria-labelledby="form-heading"
      >
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow mb-4 inline-block">Send a message</span>
            <h2 id="form-heading" className="heading-primary">
              Tell us how we can{" "}
              <span className="accent-italic">help.</span>
            </h2>
            <p className="text-body mt-5 max-w-md text-[var(--color-muted)]">
              Share a few details and we&apos;ll route your message to the
              right Georgia care specialist. Most replies arrive in under an
              hour during business days.
            </p>
            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              <ShieldCheck size={14} aria-hidden="true" />
              HIPAA-compliant intake
            </p>
          </FadeIn>
          <div className="lg:col-span-7">
            <QueryForm />
          </div>
        </div>
      </section>
    </>
  );
}
