"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, TreePine, Heart, Sprout } from "lucide-react";

const PILLARS = [
  { Icon: TreePine, label: "Naturpädagogik",       desc: "Täglich draußen lernen" },
  { Icon: Heart,    label: "Individuelle Mentoren", desc: "Jedes Kind zählt" },
  { Icon: Sprout,   label: "Jahrgangsgemischt",     desc: "Gemeinsam wachsen" },
] as const;

export function UeberDieSchule() {
  return (
    <section
      id="ueber-uns"
      className="section"
      style={{ background: "linear-gradient(135deg,#2e3a0a 0%,#4a5a14 60%,#758a2b 100%)" }}
      aria-labelledby="ueber-h"
    >
      <div className="container">

        {/* Centered section header above the grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3" style={{ color: "#c8d87a" }}>Die freie Naturschule Köln</p>
          <p
            className="text-sm font-bold tracking-[0.2em] uppercase mb-5"
            style={{ color: "#9aad3b" }}
          >
            Natur · Mensch · Umwelt
          </p>
          <h2
            id="ueber-h"
            className="text-4xl sm:text-5xl font-black text-white leading-tight text-center"
          >
            Eine Schule, die das{" "}
            <span style={{ color: "#9aad3b" }}>Leben</span> lehrt.
          </h2>
        </motion.div>

        {/* Two-column content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <Image
              src="/images/logo.png"
              alt="fns:köln Logo"
              width={200}
              height={69}
              className="h-14 w-auto object-contain brightness-0 invert mb-8 mx-auto lg:mx-0"
            />

            <p className="text-white/80 text-base leading-relaxed mb-4">
              Die fns:köln ist eine freie Grund- und Gesamtschule in Köln-Rodenkirchen,
              die 2022 mit einer kraftvollen Idee gestartet ist: Kinder sollen nicht nur
              lernen — sie sollen <strong className="text-white">aufblühen</strong>.
            </p>
            <p className="text-white/75 text-base leading-relaxed mb-10">
              In jahrgangsgemischten Stammgruppen, mit festen Mentoren und einem Schulleben
              mitten in der Natur wachsen unsere Schülerinnen und Schüler zu selbstständigen,
              empathischen und neugierigen jungen Menschen heran. Seit 2025/26 gibt es auch
              unsere Oberstufe.
            </p>

            {/* Pillar cards */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {PILLARS.map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#9aad3b" }} aria-hidden="true" />
                  <p className="text-white text-xs sm:text-sm font-bold leading-tight">{label}</p>
                  <p className="text-white/55 text-xs leading-tight hidden sm:block">{desc}</p>
                </div>
              ))}
            </div>

            {/* Sommerfest teaser */}
            <div
              className="rounded-2xl p-6 mb-10 text-left"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(200,216,122,0.2)" }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#9aad3b" }}>
                Warum zum Sommerfest?
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                Das Sommerfest ist <strong className="text-white">die</strong> Gelegenheit,
                die fns:köln zu erleben, die Gemeinschaft zu spüren und das Schulgelände mit
                Kölns größtem Insektenhotel, der Ackerschule und den grünen Klassenzimmern
                hautnah zu entdecken. Offen für alle — Eintritt frei.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
                aria-label="Mehr über fns:köln erfahren auf freie-naturschulen.de"
              >
                Mehr über fns:köln erfahren
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            aria-hidden="true"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/foto1.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw,50vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#758a2b]/15">
              <p className="text-xs font-bold text-[#758a2b] uppercase tracking-wider mb-0.5">Gegründet 2022</p>
              <p className="text-sm font-semibold text-[#2a3418]">Köln-Rodenkirchen</p>
              <p className="text-xs text-[#7a7a7a]">Natur · Mensch · Umwelt</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
