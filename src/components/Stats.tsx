"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { number: "4",  label: "Jahre fns:köln",   sub: "Gegründet 2022 in Köln" },
  { number: "1",  label: "Schulgemeinschaft", sub: "Grund- & Gesamtschule" },
  { number: "∞",  label: "Begeisterung",      sub: "Täglich neu entfacht" },
] as const;

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" aria-label="Unser Meilenstein">

      {/* Background – royalty-free Unsplash photo */}
      <Image
        src="/images/stock1.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
        quality={80}
      />

      {/* Dark olive overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(30,46,8,0.90) 0%, rgba(74,90,20,0.80) 60%, rgba(30,46,8,0.88) 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">
        <div className="text-center mb-14">
          <motion.p
            className="section-label mb-3"
            style={{ color: "#c8d87a" }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            Ein Grund zu feiern
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Was wir gemeinsam<br/>
            <span style={{ color: "#9aad3b" }}>erreicht haben.</span>
          </motion.h2>
        </div>

        {/* Counter grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-3xl mx-auto">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center px-4 py-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(200,216,122,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="stat-number">{s.number}</span>
              <span className="text-xl sm:text-2xl font-bold text-white mt-4 mb-1">{s.label}</span>
              <span className="text-sm" style={{ color: "rgba(200,216,122,0.7)" }}>{s.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center mt-14 text-white/60 text-base max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Jetzt feiern wir — und ihr seid herzlich eingeladen.{" "}
          <strong className="text-white/85">Freitag, 10. Juli 2026 · 15–18 Uhr · Eintritt frei.</strong>
        </motion.p>
      </div>
    </section>
  );
}
