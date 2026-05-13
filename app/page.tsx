import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/landing/hero";
import Conditions from "@/components/landing/conditions";
import ExpertCare from "@/components/landing/expertcare";
import Steps from "@/components/landing/steps";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import { FAQ_ITEMS } from "@/lib/faqData";

const Doctors = dynamic(() => import("@/components/landing/doctors"));
const Stats = dynamic(() => import("@/components/landing/stats"));
const Benefits = dynamic(() => import("@/components/landing/benefits"));
const Pricing = dynamic(() => import("@/components/landing/pricing"));
const Reviews = dynamic(() => import("@/components/landing/reviews"));
const Trust = dynamic(() => import("@/components/landing/trust"));
const StartJourney = dynamic(
  () => import("@/components/landing/startjourney"),
);
const Faq = dynamic(() => import("@/components/landing/faq"));
const SpeakWithDoc = dynamic(
  () => import("@/components/landing/speakwithdoc"),
);

export const metadata: Metadata = buildMetadata({
  title: "Apply Your Medical Marijuana Card Georgia | Trusted MMJ Card",
  description:
    "Apply for a Georgia medical marijuana card online with expert guidance, licensed doctors, and a smooth patient approval process.",
  canonicalPath: "/",
});

const FOUR_REVIEWS = [
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Janelle T." },
    reviewBody:
      "I had been told for years that nothing would help my intractable pain. The physician walked me through every detail of the Georgia registry, approved me the same week, and now I sleep through the night.",
    datePublished: "2026-03-04",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Marcus W." },
    reviewBody:
      "Booking, evaluation, certification — the whole process took five days. The doctor genuinely listened and never rushed me.",
    datePublished: "2026-02-12",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Priya S." },
    reviewBody:
      "After my MS diagnosis I felt overwhelmed. This service made getting my Georgia card simple and dignified.",
    datePublished: "2026-01-22",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Devon R." },
    reviewBody:
      "Caring physicians, fair pricing, no hidden fees. Renewal was even easier than the first evaluation.",
    datePublished: "2026-01-09",
  },
];

const HOWTO_STEPS = [
  {
    name: "Create Your Account",
    text: "Sign up and share basic information to begin your Georgia medical marijuana card evaluation.",
  },
  {
    name: "Schedule Your Consultation",
    text: "Choose a convenient time to meet online with a Georgia-licensed medical cannabis doctor.",
  },
  {
    name: "Attend Your MMJ Evaluation",
    text: "Meet your doctor via secure video consultation; they'll review your medical history and qualifying condition.",
  },
  {
    name: "Receive Your Card",
    text: "If approved, your physician's certification is submitted to the state, and you'll receive your Georgia Medical Marijuana Card.",
  },
];

const medicalOrganizationLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/assets/logo.svg`,
  image: `${SITE_CONFIG.url}/assets/og-homepage.svg`,
  telephone: SITE_CONFIG.phoneTel,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.defaultDescription,
  medicalSpecialty: "Medical Marijuana Certification",
  areaServed: { "@type": "State", name: "Georgia" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "GA",
    addressLocality: "Atlanta",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phoneTel,
    contactType: "patient services",
    areaServed: "US-GA",
    availableLanguage: ["English"],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for a Georgia Medical Marijuana Card",
  description:
    "The four-step process to receive your Georgia Medical Marijuana Card online.",
  totalTime: "P5D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "149" },
  step: HOWTO_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

const medicalBusinessLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phoneTel,
  priceRange: "$",
  medicalSpecialty: "Medical Marijuana Certification",
  areaServed: { "@type": "State", name: "Georgia" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: FOUR_REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: FOUR_REVIEWS,
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-medical-org" data={medicalOrganizationLd} />
      <JsonLd id="ld-website" data={websiteLd} />
      <JsonLd id="ld-faq" data={faqLd} />
      <JsonLd id="ld-howto" data={howToLd} />
      <JsonLd id="ld-medical-business" data={medicalBusinessLd} />

      <Hero />
      <Conditions />
      <ExpertCare />
      <Steps />
      <Doctors />
      <Stats />
      <Benefits />
      <Pricing />
      <Reviews />
      <Trust />

      <StartJourney />
      <Faq />
      <SpeakWithDoc />
    </>
  );
}
