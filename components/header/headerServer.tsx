import HeaderClient from "./headerClient";

export const NAV_LINKS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#conditions", label: "Conditions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact" },
] as const;

export default function HeaderServer() {
  return <HeaderClient navLinks={NAV_LINKS} />;
}
