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

        {/* Section header — fully centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label mb-3" style={{ color: "#c8d87a" }}>Die freie Naturschule Köln</p>
          <p style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#9aad3b", marginBottom: "1.25rem" }}>
            Natur · Mensch · Umwelt
          </p>
          <h2 id="ueber-h"
            style={{ textAlign: "center", color: "#fff", fontWeight: 800,
              fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            Eine Schule, die das{" "}
            <span style={{ color: "#9aad3b" }}>Leben</span> lehrt.
          </h2>
        </motion.div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
              className="lg:justify-start">
              <Image src="/images/logo.png" alt="fns:köln Logo"
                width={200} height={69}
                className="h-14 w-auto object-contain brightness-0 invert" />
            </div>

            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.0625rem",
                lineHeight: 1.75, marginBottom: "1rem" }}>
              Die fns:köln ist eine freie Grund- und Gesamtschule in Köln-Rodenkirchen,
              die 2022 mit einer kraftvollen Idee gestartet ist: Kinder sollen nicht nur
              lernen — sie sollen <strong style={{ color: "#fff" }}>aufblühen</strong>.
            </p>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0625rem",
                lineHeight: 1.75, marginBottom: "2.5rem" }}>
              In jahrgangsgemischten Stammgruppen, mit festen Mentoren und einem Schulleben
              mitten in der Natur wachsen unsere Schülerinnen und Schüler zu selbstständigen,
              empathischen und neugierigen jungen Menschen heran. Seit 2025/26 gibt es auch
              unsere Oberstufe.
            </p>

            {/* Pillar cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem",
                marginBottom: "2.5rem" }}>
              {PILLARS.map(({ Icon, label, desc }) => (
                <div key={label}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "0.5rem", padding: "1.125rem 0.75rem", borderRadius: "0.875rem",
                    backgroundColor: "rgba(255,255,255,0.08)", textAlign: "center" }}>
                  <Icon style={{ width: "1.375rem", height: "1.375rem", color: "#9aad3b" }} aria-hidden="true" />
                  <p style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 700,
                      lineHeight: 1.3 }}>{label}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem",
                      lineHeight: 1.3 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Warum-Sommerfest teaser */}
            <div style={{ borderRadius: "1rem", padding: "1.5rem", marginBottom: "2.5rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(200,216,122,0.2)" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.14em", color: "#9aad3b", marginBottom: "0.625rem" }}>
                Warum zum Sommerfest?
              </p>
              <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                Das Sommerfest ist <strong style={{ color: "#fff" }}>die</strong> Gelegenheit,
                die fns:köln zu erleben, die Gemeinschaft zu spüren und das Schulgelände mit
                Kölns größtem Insektenhotel, der Ackerschule und den grünen Klassenzimmern
                hautnah zu entdecken. Offen für alle — Eintritt frei.
              </p>
            </div>

            {/* Button — inline-flex, never full-width */}
            <div style={{ display: "flex", justifyContent: "center" }}
              className="lg:justify-start">
              <Link
                href="https://freie-naturschulen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
                style={{ display: "inline-flex", width: "auto", flexShrink: 0 }}
                aria-label="Mehr über fns:köln erfahren auf freie-naturschulen.de"
              >
                Mehr über fns:köln erfahren
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }} aria-hidden="true"
          >
            <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)", aspectRatio: "3/4" }}>
              <Image src="/images/foto1.jpg" alt="" fill className="object-cover"
                sizes="(max-width:1024px) 100vw,50vw" />
            </div>
            <div style={{ position: "absolute", bottom: "-1.25rem", left: "-1.25rem",
                background: "#fff", borderRadius: "1rem", boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                padding: "1rem 1.25rem", border: "1px solid rgba(117,138,43,0.12)" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#758a2b",
                  textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                Gegründet 2022
              </p>
              <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#2a3418" }}>Köln-Rodenkirchen</p>
              <p style={{ fontSize: "0.75rem", color: "#7a7a7a" }}>Natur · Mensch · Umwelt</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
