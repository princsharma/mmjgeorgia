"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import StaggerGroup, {
  staggerItemVariants,
} from "@/components/motion/StaggerGroup";
import FadeIn from "@/components/motion/FadeIn";

interface Doctor {
  name: string;
  credentials: string;
  specialty: string;
  years: string;
  license: string;
  photo: string;
}

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Aisha Patel",
    credentials: "MD, MPH",
    specialty: "Internal Medicine • Medical Cannabis",
    years: "14 years",
    license: "GA Lic. MD-44218",
    photo: "/assets/doctors/doc-1.svg",
  },
  {
    name: "Dr. Marcus Reyes",
    credentials: "MD",
    specialty: "Family Medicine • Pain Management",
    years: "11 years",
    license: "GA Lic. MD-53901",
    photo: "/assets/doctors/doc-2.svg",
  },
  {
    name: "Dr. Linnea Okafor",
    credentials: "DO",
    specialty: "Neurology • Cannabinoid Therapy",
    years: "9 years",
    license: "GA Lic. DO-31476",
    photo: "/assets/doctors/doc-3.svg",
  },
  {
    name: "Dr. Samuel Yoon",
    credentials: "MD, FACP",
    specialty: "Oncology • Palliative Care",
    years: "17 years",
    license: "GA Lic. MD-22084",
    photo: "/assets/doctors/doc-4.svg",
  },
];

export default function Doctors() {
  const reduce = useReducedMotion();
  return (
    <section
      id="doctors"
      className="relative scroll-mt-24 py-24 md:py-32"
      aria-labelledby="doctors-heading"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center" y={20}>
          <span className="eyebrow mb-4 inline-block">Our Physicians</span>
          <h2 id="doctors-heading" className="heading-primary">
            Meet your <span className="accent-italic">Georgia</span> care team
          </h2>
          <p className="text-body mt-5 text-[var(--color-muted)]">
            Every doctor on our network is licensed in Georgia, vetted for
            compassion as well as expertise, and trained in the state&apos;s
            Low THC Oil Registry process.
          </p>
        </FadeIn>

        <StaggerGroup
          stagger={0.07}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DOCTORS.map((doc) => (
            <motion.article
              key={doc.name}
              variants={staggerItemVariants}
              whileHover={
                reduce
                  ? undefined
                  : { rotate: -2, y: -4 }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-5 shadow-[0_24px_60px_-30px_rgba(3,60,63,0.22)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-surface-tint)]">
                <Image
                  src={doc.photo}
                  alt={`Portrait of ${doc.name}, ${doc.specialty}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-5 overflow-hidden">
                <h3 className="heading-quaternary">
                  {doc.name}
                  <span className="ml-1 text-sm font-medium text-[var(--color-muted)]">
                    {doc.credentials}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-[var(--color-body)]">
                  {doc.specialty}
                </p>
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  whileHover={reduce ? undefined : { y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[var(--color-muted)] group-hover:opacity-100"
                >
                  <span>{doc.years} experience</span>
                  <span className="text-[var(--color-accent)]">
                    {doc.license}
                  </span>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
