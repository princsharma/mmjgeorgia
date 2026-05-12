import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const contactMetadata: Metadata = buildMetadata({
  title: "Contact Us | Georgia Medical Marijuana Card",
  description:
    "Speak with a Georgia patient-care specialist about your medical marijuana card evaluation. HIPAA-compliant, fast, and friendly support across all 159 GA counties.",
  canonicalPath: "/contact-us",
});
