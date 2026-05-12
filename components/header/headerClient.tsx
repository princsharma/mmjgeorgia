"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderClientProps {
  navLinks: readonly NavLink[];
}

export default function HeaderClient({ navLinks }: HeaderClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(229,231,235,1), 0 8px 30px -20px rgba(3,60,63,0.18)"
          : "0 1px 0 rgba(229,231,235,0)",
      }}
      transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      role="banner"
    >
      <div className="container-page flex items-center justify-between gap-6 py-4 md:py-5">
        <Link
          href="/"
          aria-label="Medical Marijuana Card Georgia — home"
          className="flex items-center gap-2 focus-ring"
        >
          <Image
            src="/assets/logo.svg"
            alt=""
            width={196}
            height={36}
            priority
            className="h-9 w-auto"
          />
          <span className="sr-only">Medical Marijuana Card Georgia</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
          onMouseLeave={() => setHovered(null)}
        >
          <LayoutGroup id="nav-underline">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hovered === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative inline-flex items-center px-3.5 py-2 text-sm font-medium text-[var(--color-heading)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <span className="relative z-10">{link.label}</span>
                  {(isHovered || (!hovered && isActive)) && (
                    <motion.span
                      layoutId="nav-underline-bar"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--color-accent)]"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </LayoutGroup>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#apply" className="btn-primary hidden md:inline-flex">
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-heading)] lg:hidden focus-ring"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <motion.path
                d="M4 7h16"
                animate={
                  menuOpen
                    ? { d: "M5 5l14 14", rotate: 0 }
                    : { d: "M4 7h16", rotate: 0 }
                }
                transition={{ duration: reduce ? 0 : 0.25 }}
              />
              <motion.path
                d="M4 12h16"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: reduce ? 0 : 0.15 }}
              />
              <motion.path
                d="M4 17h16"
                animate={
                  menuOpen
                    ? { d: "M5 19L19 5" }
                    : { d: "M4 17h16" }
                }
                transition={{ duration: reduce ? 0 : 0.25 }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: reduce ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-0 z-30 bg-white shadow-[0_30px_80px_-30px_rgba(3,60,63,0.35)] lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 pb-10 pt-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.35,
                    delay: reduce ? 0 : 0.1 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--color-border)] py-4 text-xl font-medium text-[var(--color-heading)] hover:text-[var(--color-accent)]"
                  >
                    <span>{link.label}</span>
                    <span className="text-[var(--color-accent)]">→</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#apply"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
