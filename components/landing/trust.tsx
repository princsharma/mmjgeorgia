"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import Marquee from "@/components/motion/Marquee";

const PARTNERS = [
  { src: "/assets/trust/partner-1.svg", name: "Georgia Department of Public Health" },
  { src: "/assets/trust/partner-2.svg", name: "American Medical Association" },
  { src: "/assets/trust/partner-3.svg", name: "HIPAA Compliance Certified" },
  { src: "/assets/trust/partner-4.svg", name: "Society of Cannabis Clinicians" },
  { src: "/assets/trust/partner-5.svg", name: "BBB Accredited Business" },
  { src: "/assets/trust/partner-6.svg", name: "Georgia Medical Association" },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative scroll-mt-24 py-16 md:py-20"
      aria-labelledby="trust-heading"
    >
      <h2 id="trust-heading" className="sr-only">
        Trust and accreditation partners
      </h2>
      <div className="container-page">
        <FadeIn className="mb-8 text-center">
          <p className="eyebrow">Trusted by Georgia patients & partners</p>
        </FadeIn>
        <Marquee speed={36} pauseOnHover>
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex h-14 items-center px-2 grayscale opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={p.src}
                alt={`${p.name} — Georgia Medical Marijuana Card trust partner`}
                title={p.name}
                width={170}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
