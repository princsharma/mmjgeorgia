"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";
import {
  contactFormSchema,
  QUALIFYING_CONDITIONS,
  type ContactFormValues,
} from "@/lib/formSchema";
import { sleep } from "@/lib/utils";

export default function QueryForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    await sleep(900);
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "contact_form_submit",
        condition: data.qualifyingCondition,
      });
    }
    setSubmitted(true);
  };

  const onInvalid = () => setShake((n) => n + 1);

  if (submitted) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card flex flex-col items-center p-10 text-center md:p-14"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <Check size={32} strokeWidth={2.5} />
        </div>
        <h3 className="heading-secondary mb-3">
          We have your message.
        </h3>
        <p className="text-body max-w-md text-[var(--color-muted)]">
          A Georgia patient-care specialist will reach out within one business
          hour. If your need is urgent, call us anytime.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      layout
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      animate={
        shake && !reduce
          ? { x: [0, -8, 8, -6, 6, -3, 3, 0] }
          : { x: 0 }
      }
      transition={{ duration: 0.45 }}
      className="surface-card grid gap-5 p-6 md:p-10"
      aria-label="Send us a message"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="contact-fullName"
            className="eyebrow mb-2 block"
          >
            Full Name
          </label>
          <input
            id="contact-fullName"
            type="text"
            autoComplete="name"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-heading)] focus:border-[var(--color-accent)] focus:outline-none"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-600" role="alert" aria-live="polite">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="eyebrow mb-2 block">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-heading)] focus:border-[var(--color-accent)] focus:outline-none"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600" role="alert" aria-live="polite">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="eyebrow mb-2 block">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-heading)] focus:border-[var(--color-accent)] focus:outline-none"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600" role="alert" aria-live="polite">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="contact-condition"
            className="eyebrow mb-2 block"
          >
            Qualifying Condition
          </label>
          <select
            id="contact-condition"
            defaultValue=""
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-heading)] focus:border-[var(--color-accent)] focus:outline-none"
            {...register("qualifyingCondition")}
          >
            <option value="" disabled>
              Select a condition
            </option>
            {QUALIFYING_CONDITIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.qualifyingCondition && (
            <p className="mt-1.5 text-xs text-red-600" role="alert" aria-live="polite">
              {errors.qualifyingCondition.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="eyebrow mb-2 block">
          How can we help?
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-heading)] focus:border-[var(--color-accent)] focus:outline-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600" role="alert" aria-live="polite">
            {errors.message.message}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 text-xs text-[var(--color-muted)]">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          {...register("consent")}
        />
        <span>
          I consent to be contacted by Medical Marijuana Card Georgia about
          my inquiry. HIPAA-compliant.
        </span>
      </label>
      {errors.consent && (
        <p className="-mt-3 text-xs text-red-600" role="alert" aria-live="polite">
          {errors.consent.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-2 w-full md:w-auto md:self-start md:px-10"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </motion.form>
  );
}
