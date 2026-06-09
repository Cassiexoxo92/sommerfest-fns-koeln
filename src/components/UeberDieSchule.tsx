"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Leaf } from "lucide-react";

const WERTE = [
  { label: "Freude am Lehren & Lernen", emoji: "✨" },
  { label: "Motivation statt Leistungsdruck", emoji: "🌱" },
  { label: "Gemeinschaft", emoji: "🤝" },
  { label: "Toleranz & Weltoffenheit", emoji: "🌍" },
  { label: "Naturverbundenheit", emoji: "🍃" },
  { label: "Respekt vor allen Lebewesen", emoji: "🦋" },
  { label: "Individuelle Förderung", emoji: "⭐" },
];

export function UeberDieSchule() {
  return (
    <section
      id="ueber-uns"
      className="section-padding"
      style={{
        background:
          "linear-gradient(135deg, #f0f9f0 0%, #e8f4fd 50%, #f9f8f4 100%)",
      }}
      aria-labelledby="ueber-heading"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[#61ce70]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-widest text-[#61ce70]">
                Seit 2022 in Köln-Rodenkirchen
              </p>
            </div>

            <h2
              id="ueber-heading"
              className="text-4xl sm:text-5xl font-black text-[#54595f] leading-tight mb-6"
            >
              Eine Schule, die das{" "}
              <span className="text-[#61ce70]">Leben</span> lehrt.
            </h2>

            <p className="text-base text-[#7a7a7a] leading-relaxed mb-5">
              Die fns:Köln ist eine freie Grund- und Gesamtschule, die 2022 mit
              einer einfachen, aber kraftvollen Idee gestartet ist: Kinder
              sollen nicht nur lernen — sie sollen aufblühen.
            </p>
            <p className="text-base text-[#7a7a7a] leading-relaxed mb-8">
              In jahrgangsgemischten Stammgruppen, mit festen Mentoren und einem
              Schulleben mitten in der Natur wachsen unsere Schülerinnen und
              Schüler zu selbstständigen, empathischen und neugierigen jungen
              Menschen heran. Seit dem Schuljahr 2025/26 gibt es auch unsere
              Oberstufe.
            </p>

            {/* Values list */}
            <ul className="space-y-2.5 mb-8" aria-label="Unsere Werte">
              {WERTE.map(({ label, emoji }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">{emoji}</span>
                  <span className="text-sm font-medium text-[#54595f]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="https://freie-naturschulen.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6ec1e4] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5aade0] transition-colors duration-200 shadow-sm"
              aria-label="Mehr über die fns:Köln erfahren auf freie-naturschulen.de (öffnet in neuem Tab)"
            >
              Mehr über fns:Köln erfahren
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            aria-hidden="true"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/foto5.jpg"
                alt="fns:Köln — Schülerinnen und Schüler erleben Natur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Logo floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <Image
                src="/images/logo.png"
                alt="fns:Köln Logo"
                width={80}
                height={27}
                className="h-8 w-auto object-contain"
              />
              <div>
                <p className="text-xs font-bold text-[#54595f]">Gegründet 2022</p>
                <p className="text-xs text-[#7a7a7a]">Köln-Rodenkirchen</p>
              </div>
            </div>

            {/* Accent circle */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #6ec1e4 0%, transparent 70%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
