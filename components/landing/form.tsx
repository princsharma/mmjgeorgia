"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import { Mail, Phone, User } from "lucide-react";
import { leadFormSchema, type LeadFormValues } from "@/lib/formSchema";

const HEALLY_STATE = {
  stateAbbr: "GA",
  stateName: "Georgia",
  city: "Atlanta",
  timezone: "EST",
} as const;

const HEALLY_UTM_SOURCE = "medicalmarijuanacardgeorgia";
const HEALLY_PREFILL_BASE_URL =
  "https://mymmj.getheally.com/patient_admin/prefill";

function base64UrlEncode(input: string): string {
  return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

interface FieldShellProps {
  label: string;
  htmlFor: string;
  error?: string;
  icon: ReactNode;
  children: ReactNode;
}

function FieldShell({
  label,
  htmlFor,
  error,
  icon,
  children,
}: FieldShellProps) {
  return (
    <div className="relative">
      <div
        className={`relative flex items-center rounded-2xl border bg-white transition-all focus-within:border-[var(--color-accent)] [&:has(.peer:not(:placeholder-shown))]:border-[var(--color-accent)] ${
          error ? "border-red-300" : "border-[var(--color-border)]"
        }`}
      >
        <span className="pl-4 text-[var(--color-muted)]" aria-hidden="true">
          {icon}
        </span>
        {children}
        <label
          htmlFor={htmlFor}
          className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 bg-white px-1 text-sm text-[var(--color-muted)] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[var(--color-muted)] peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[0.7rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
        >
          {label}
        </label>
      </div>
      {error && (
        <p
          className="mt-1.5 text-xs text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm() {
  const reduce = useReducedMotion();
  const [shake, setShake] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      consent: false,
    },
  });

  const onSubmit = (data: LeadFormValues) => {
    const nameParts = data.fullName.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      phone: data.phone,
      state: HEALLY_STATE.stateAbbr,
      state_of_evaluation: HEALLY_STATE.stateAbbr,
      timezone: HEALLY_STATE.timezone,
      city: HEALLY_STATE.city,
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: HEALLY_UTM_SOURCE,
      },
    };

    const preset = base64UrlEncode(JSON.stringify(payload));

    if (typeof window !== "undefined") {
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "heallyValidatedSubmit",
          utm_source: HEALLY_UTM_SOURCE,
        });
      }

      window.location.assign(
        `${HEALLY_PREFILL_BASE_URL}?redirect=sched&preset=${preset}&utm_source=${HEALLY_UTM_SOURCE}`,
      );
    }
  };

  const onInvalid = () => {
    setShake((n) => n + 1);
  };

  return (
    <motion.div
      layout
      transition={{
        duration: reduce ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_30px_70px_-32px_rgba(32,183,128,0.32)] md:p-8"
      id="apply-form"
    >
      <motion.div
        layout
        className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-accent)]"
      />

      <motion.form
        key="form"
        layout
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
        animate={
          shake && !reduce ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }
        }
        transition={{ duration: 0.45 }}
        className="space-y-4"
        aria-label="Begin your Georgia medical marijuana card evaluation"
      >
          <div>
            <h3 className="heading-tertiary mb-1">Begin Your Evaluation</h3>
            <p className="text-small text-[var(--color-muted)]">
              Takes about 90 seconds. No charges until your appointment.
            </p>
          </div>

          <FieldShell
            label="Full Name"
            htmlFor="fullName"
            icon={<User size={18} />}
            error={errors.fullName?.message}
          >
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder=" "
              className="peer w-full bg-transparent py-4 pl-3 pr-4 text-sm text-[var(--color-heading)] focus:outline-none"
              {...register("fullName")}
            />
          </FieldShell>

          <FieldShell
            label="Email"
            htmlFor="email"
            icon={<Mail size={18} />}
            error={errors.email?.message}
          >
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder=" "
              className="peer w-full bg-transparent py-4 pl-3 pr-4 text-sm text-[var(--color-heading)] focus:outline-none"
              {...register("email")}
            />
          </FieldShell>

          <FieldShell
            label="Phone"
            htmlFor="phone"
            icon={<Phone size={18} />}
            error={errors.phone?.message}
          >
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder=" "
              className="peer w-full bg-transparent py-4 pl-3 pr-4 text-sm text-[var(--color-heading)] focus:outline-none"
              {...register("phone")}
            />
          </FieldShell>

          <label className="flex items-start gap-3 pt-1 text-xs text-[var(--color-muted)]">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
              {...register("consent")}
            />
            <span>
              I consent to be contacted by a Georgia-licensed physician
              about my evaluation. HIPAA-compliant. By submitting, I agree
              to the Privacy Policy.
            </span>
          </label>
          {errors.consent && (
            <p
              className="-mt-2 text-xs text-red-600"
              role="alert"
              aria-live="polite"
            >
              {errors.consent.message}
            </p>
          )}

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? "Redirecting…" : "Apply for Your MMJ Card"}
        </button>

        <p className="text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          HIPAA-Compliant • SSL Encrypted • Money-Back Guarantee
        </p>
      </motion.form>
    </motion.div>
  );
}
