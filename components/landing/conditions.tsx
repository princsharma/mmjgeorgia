"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import StaggerGroup, {
  staggerItemVariants,
} from "@/components/motion/StaggerGroup";
import FadeIn from "@/components/motion/FadeIn";
import {
  Activity,
  Brain,
  Bone,
  Stethoscope,
  ShieldPlus,
  HeartPulse,
  Sparkles,
  Footprints,
  Baby,
  Layers,
  Microscope,
  Droplet,
  Wind,
  Bed,
  Flame,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Condition {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const CONDITIONS: Condition[] = [
  {
    title: "Cancer",
    description:
      "End-stage cancer or treatment-related severe symptoms including nausea, pain, and wasting.",
    Icon: ShieldPlus,
  },
  {
    title: "ALS",
    description:
      "Severe or end-stage Amyotrophic Lateral Sclerosis with documented progression.",
    Icon: Activity,
  },
  {
    title: "Seizure Disorders",
    description:
      "Seizure disorders related to epilepsy or head trauma not controlled by standard treatment.",
    Icon: Brain,
  },
  {
    title: "Multiple Sclerosis",
    description:
      "Severe or end-stage multiple sclerosis with persistent symptoms.",
    Icon: Stethoscope,
  },
  {
    title: "Crohn's Disease",
    description:
      "Crohn's disease causing chronic inflammation and severe pain or weight loss.",
    Icon: HeartPulse,
  },
  {
    title: "Mitochondrial Disease",
    description:
      "Mitochondrial diseases impairing energy production and muscle function.",
    Icon: Microscope,
  },
  {
    title: "Parkinson's Disease",
    description:
      "Severe or end-stage Parkinson's disease with tremor or motor symptoms.",
    Icon: Footprints,
  },
  {
    title: "Sickle Cell Disease",
    description:
      "Severe or end-stage sickle cell disease with chronic pain episodes.",
    Icon: Droplet,
  },
  {
    title: "Tourette's Syndrome",
    description:
      "Severe Tourette's syndrome with frequent, disruptive vocal or motor tics.",
    Icon: Wind,
  },
  {
    title: "Autism Spectrum Disorder",
    description:
      "Autism spectrum disorder with behavioral or self-regulatory symptoms.",
    Icon: Baby,
  },
  {
    title: "Epidermolysis Bullosa",
    description:
      "Epidermolysis bullosa with chronic skin fragility and pain.",
    Icon: Layers,
  },
  {
    title: "Alzheimer's Disease",
    description:
      "Severe or end-stage Alzheimer's disease with cognitive decline.",
    Icon: Brain,
  },
  {
    title: "AIDS",
    description:
      "Severe or end-stage AIDS with wasting, pain, or appetite loss.",
    Icon: ShieldCheck,
  },
  {
    title: "Peripheral Neuropathy",
    description:
      "Severe or end-stage peripheral neuropathy causing chronic nerve pain.",
    Icon: Bone,
  },
  {
    title: "Hospice Patients",
    description:
      "Patients enrolled in hospice care for symptom comfort and quality of life.",
    Icon: Bed,
  },
  {
    title: "Intractable Pain",
    description:
      "Intractable pain unresponsive to other treatments and lasting six months or longer.",
    Icon: Flame,
  },
  {
    title: "PTSD",
    description:
      "PTSD from direct trauma resulting in psychiatric hospitalization.",
    Icon: Sparkles,
  },
];

export default function Conditions() {
  const reduce = useReducedMotion();
  return (
    <section
      id="conditions"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="conditions-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">
            Qualifying Conditions
          </span>
          <h2 id="conditions-heading" className="heading-primary">
            Conditions that qualify in{" "}
            <span className="accent-italic">Georgia</span>
          </h2>
          <p className="text-body mt-5 text-[var(--color-muted)]">
            Georgia recognizes seventeen qualifying conditions for the Low THC
            Oil Registry. Below is the full list — our physicians will review
            your medical history to confirm eligibility.
          </p>
        </FadeIn>

        <StaggerGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {CONDITIONS.map((c) => (
            <motion.article
              key={c.title}
              variants={staggerItemVariants}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -6,
                      boxShadow:
                        "0 38px 70px -28px rgba(3, 60, 63, 0.28)",
                    }
              }
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="surface-card relative overflow-hidden p-7"
              style={{ aspectRatio: "3 / 4", minHeight: 280 }}
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 200 200"
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-[var(--color-accent)] opacity-[0.08]"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M40,-60C50,-50,55,-35,60,-20C65,-5,70,10,65,25C60,40,45,55,28,62C11,69,-8,68,-25,60C-42,52,-57,37,-62,20C-67,3,-62,-16,-52,-30C-42,-44,-26,-53,-9,-58C8,-63,30,-70,40,-60Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="relative flex h-full flex-col">
                <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <c.Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="heading-tertiary mb-3">{c.title}</h3>
                <p className="text-small text-[var(--color-muted)]">
                  {c.description}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>

        <FadeIn className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-5 text-center">
          <p className="text-small text-[var(--color-muted)]">
            Not sure if you qualify? Our team can review your medical history
            during a free consultation.
          </p>
          <Link href="/#apply" className="btn-primary">
            Check if I Qualify
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
