import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Medical Marijuana Card Georgia",
  shortName: "MMJ Card Georgia",
  url: "https://medicalmarijuanacardgeorgia.com",
  defaultTitle: "Apply Your Medical Marijuana Card Georgia | Trusted MMJ Card",
  defaultDescription:
    "Apply for a Georgia medical marijuana card online with expert guidance, licensed doctors, and a smooth patient approval process.",
  defaultKeywords: [
    "Medical Marijuana Card Georgia",
    "Georgia medical marijuana card",
    "GA MMJ card",
    "Georgia medical cannabis",
    "Georgia medical marijuana doctor",
    "low THC oil registry Georgia",
    "online MMJ evaluation Georgia",
    "Georgia telehealth marijuana",
    "GA medical cannabis card",
  ],
  twitterHandle: "@mmjcardgeorgia",
  locale: "en_US",
  phone: "1-844-GA-MMJRX",
  phoneTel: "+18444266675",
  email: "contact@medicalmarijuanacardgeorgia.com",
  address: {
    region: "GA",
    locality: "Atlanta",
    country: "US",
  },
  gtmId: "GTM-TPXP9L5B",
  googleVerification: "aioePGddkulySTzukHDhzls0eU_iMi2hsYnUWPVlqXg",
} as const;

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  keywords?: readonly string[] | string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noIndex?: boolean;
  extra?: Metadata;
}

export function buildMetadata({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogImage = "/assets/og-homepage.svg",
  ogType = "website",
  noIndex = false,
  extra,
}: BuildMetadataOptions = {}): Metadata {
  const finalTitle = title ?? SITE_CONFIG.defaultTitle;
  const finalDescription = description ?? SITE_CONFIG.defaultDescription;
  const finalKeywords = keywords ?? SITE_CONFIG.defaultKeywords;
  const canonical = canonicalPath.startsWith("http")
    ? canonicalPath
    : `${SITE_CONFIG.url}${canonicalPath === "/" ? "" : canonicalPath}`;
  const absoluteOg = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_CONFIG.url}${ogImage}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: finalTitle,
    description: finalDescription,
    keywords: Array.from(finalKeywords),
    applicationName: SITE_CONFIG.name,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    alternates: {
      canonical,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: ogType,
      images: [
        {
          url: absoluteOg,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [absoluteOg],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    verification: {
      google: SITE_CONFIG.googleVerification,
    },
    ...extra,
  };
}
