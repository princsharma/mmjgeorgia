import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { contactMetadata } from "./metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return <ContactPageContent />;
}
