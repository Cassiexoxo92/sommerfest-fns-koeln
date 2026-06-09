"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

const LINKS = [
  { label: "Programm",     href: "#programm" },
  { label: "Galerie",      href: "#galerie" },
  { label: "Anfahrt",      href: "#anfahrt" },
  { label: "Über uns",     href: "#ueber-uns" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white shadow-sm border-b border-[#758a2b]/10"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => go("#hero")}
              className="flex-shrink-0 focus-visible:outline-offset-4"
              aria-label="fns:köln — zurück nach oben"
            >
              <Image
                src="/images/logo.png"
                alt="fns:köln — Freie Naturschulen Köln"
                width={160}
                height={55}
                className={`h-12 w-auto object-contain transition-all duration-300 ${
                  !scrolled ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </button>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Hauptnavigation">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-[#758a2b] ${
                    scrolled ? "text-[#2a3418]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-nav ${scrolled ? "is-primary" : "is-white"}`}
                aria-label="Zur Schulwebsite freie-naturschulen.de"
              >
                Zur Schule
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#2a3418]" : "text-white"
              }`}
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white border-b border-[#758a2b]/10 shadow-lg"
            aria-label="Mobile Navigation"
          >
            <div className="container py-6 flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left text-base font-semibold text-[#2a3418] py-3 px-2 rounded-xl hover:bg-[#f0f5e0] hover:text-[#758a2b] transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 justify-center"
              >
                Zur Schulwebsite
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
