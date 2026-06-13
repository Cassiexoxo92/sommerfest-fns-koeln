"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TreePine, Sun, Heart } from "lucide-react";

const STATS = [
  {
    Icon: TreePine,
    number: "4",
    unit: "Jahre",
    label: "Natur & Gemeinschaft",
    sub: "Gegründet 2022 in Köln-Rodenkirchen",
  },
  {
    Icon: Sun,
    number: "30+",
    unit: "Stunden",
    label: "Draußen pro Woche",
    sub: "Kinder lernen täglich in der freien Natur",
  },
  {
    Icon: Heart,
    number: "100+",
    unit: "Familien",
    label: "In unserer Gemeinschaft",
    sub: "Schüler*innen, Eltern & Lehrende vereint",
  },
] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "6rem" }} aria-label="fns:köln in Zahlen">
      <Image src="/images/stock1.jpg" alt="" fill className="object-cover object-center"
        sizes="100vw" aria-hidden="true" quality={80} />
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: "linear-gradient(150deg,rgba(30,46,8,0.93) 0%,rgba(74,90,20,0.82) 55%,rgba(30,46,8,0.90) 100%)" }} />

      <div className="relative z-10 container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.p className="section-label mb-4" style={{ color: "#c8d87a" }}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            fns:köln in Zahlen
          </motion.p>
          <motion.h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Was wir gemeinsam<br />
            <span style={{ color: "#9aad3b" }}>erreicht haben.</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ maxWidth: "56rem", marginInline: "auto" }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.14 }}
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(200,216,122,0.22)",
                backdropFilter: "blur(12px)", borderRadius: "1.5rem", padding: "2.5rem 2rem",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              {/* Icon circle */}
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%",
                  background: "rgba(154,173,59,0.18)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "1.5rem" }}>
                <s.Icon style={{ width: "1.75rem", height: "1.75rem", color: "#9aad3b" }} aria-hidden="true" />
              </div>
              {/* Big number — wraps the unit below on narrow cards so it never clips */}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center",
                  flexWrap: "wrap", gap: "0.125rem 0.4rem", marginBottom: "0.25rem", maxWidth: "100%" }}>
                <span style={{ fontSize: "clamp(3rem,6vw,4.5rem)", fontWeight: 900,
                    lineHeight: 1, color: "#9aad3b", letterSpacing: "-0.03em",
                    textShadow: "0 0 40px rgba(154,173,59,0.4)" }}>
                  {s.number}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "rgba(200,216,122,0.8)",
                    whiteSpace: "nowrap" }}>
                  {s.unit}
                </span>
              </div>
              <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#fff",
                  marginBottom: "0.5rem", lineHeight: 1.3 }}>{s.label}</p>
              <p style={{ fontSize: "0.875rem", color: "rgba(200,216,122,0.65)", lineHeight: 1.5 }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p style={{ textAlign: "center", marginTop: "3.5rem", color: "rgba(255,255,255,0.6)",
            fontSize: "1rem", maxWidth: "36rem", marginInline: "auto" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
          Jetzt feiern wir gemeinsam — und ihr seid herzlich eingeladen.{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>
            Freitag, 10. Juli 2026 · 15–18 Uhr · Eintritt frei.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}
