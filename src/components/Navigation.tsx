"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Programm",  href: "#programm" },
  { label: "Galerie",   href: "#galerie" },
  { label: "Anfahrt",  href: "#anfahrt" },
  { label: "Praktisches", href: "#praktisches" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="fns:Köln — zurück nach oben"
            >
              <Image
                src="/images/logo.png"
                alt="fns:Köln Logo — Freie Naturschulen Köln"
                width={120}
                height={41}
                className={cn(
                  "h-10 w-auto object-contain transition-all duration-300",
                  !scrolled && "brightness-0 invert"
                )}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Hauptnavigation"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-[#6ec1e4] focus-visible:text-[#6ec1e4]",
                    scrolled ? "text-[#54595f]" : "text-white"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all duration-200",
                  scrolled
                    ? "border-[#6ec1e4] text-[#6ec1e4] hover:bg-[#6ec1e4] hover:text-white"
                    : "border-white text-white hover:bg-white/20"
                )}
                aria-label="Zur Hauptseite freie-naturschulen.de (öffnet in neuem Tab)"
              >
                Zur Schule
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "md:hidden p-2 rounded-md transition-colors",
                scrolled ? "text-[#54595f]" : "text-white"
              )}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {menuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-lg md:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#54595f] hover:text-[#6ec1e4] py-2 border-b border-gray-50 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-base font-semibold text-[#6ec1e4] mt-2"
                aria-label="Zur Hauptseite freie-naturschulen.de"
              >
                Zur Schule <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
