import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import HeaderServer from "@/components/header/headerServer";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";
import HashScrollFix from "@/components/HashScrollFix";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import RouteTransition from "@/components/motion/RouteTransition";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
  variable: "--font-inter",
});

const GTM_ID = SITE_CONFIG.gtmId;

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#033c3f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full bg-white text-[var(--color-body)] antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <a
          href="#main-content"
          title="Skip to main content"
          className="skip-link"
        >
          Skip to main content
        </a>

        <HashScrollFix />
        <ScrollProgressBar />
        <HeaderServer />

        <main id="main-content" tabIndex={-1} className="relative">
          <RouteTransition>{children}</RouteTransition>
        </main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
