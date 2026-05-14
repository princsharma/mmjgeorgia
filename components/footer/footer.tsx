import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/seo";

const QUICK_LINKS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#conditions", label: "Qualifying Conditions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "Frequently Asked Questions" },
];

const RESOURCES = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/#doctors", label: "Meet the Doctors" },
  { href: "/#reviews", label: "Patient Reviews" },
  { href: "/#apply", label: "Begin Application" },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-24 border-t border-[var(--color-accent-soft)] bg-white"
      role="contentinfo"
    >
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Link
            href="/"
            aria-label="Medical Marijuana Card Georgia — home"
            className="inline-flex items-center"
          >
            <Image
              src="/assets/georgia-logo.webp"
              alt="Medical Marijuana Card Georgia logo"
              width={208}
              height={72}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-small text-[var(--color-muted)]">
            Helping Georgia residents access medical cannabis through
            licensed physicians via secure, HIPAA-compliant telehealth
            evaluations.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Licensed Georgia Telehealth Service
          </p>
        </div>

        <nav
          aria-label="Quick links"
          className="md:col-span-3"
        >
          <h2 className="heading-quaternary mb-4">Quick Links</h2>
          <ul className="space-y-2.5 text-small">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[var(--color-body)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources" className="md:col-span-2">
          <h2 className="heading-quaternary mb-4">Resources</h2>
          <ul className="space-y-2.5 text-small">
            {RESOURCES.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[var(--color-body)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="heading-quaternary mb-4">Contact</h2>
          <ul className="space-y-2.5 text-small text-[var(--color-body)]">
            <li>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="font-semibold text-[var(--color-heading)] hover:text-[var(--color-accent)] tabular-nums"
              >
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-[var(--color-accent)]"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="text-[var(--color-muted)]">
              Atlanta, Georgia
              <br />
              Serving all 159 GA counties
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <Image
              src="/assets/georgia-silhouette.svg"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
              className="opacity-90"
            />
            <span>Proudly serving Georgia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
