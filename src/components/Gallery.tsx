"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Leaf, Users, TreePine, Star } from "lucide-react";

const PHOTOS = [
  { src: "/images/foto1.jpg", alt: "Schülerinnen und Schüler der fns:köln beim Sommerfest",    span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/foto2.jpg", alt: "Natur erleben — fns:köln Schulalltag",                     span: "" },
  { src: "/images/foto3.jpg", alt: "Gemeinschaft und Lernen an der fns:köln",                  span: "" },
  { src: "/images/foto4.jpg", alt: "Freie Naturschule Köln — Naturpädagogik",                  span: "sm:col-span-2" },
  { src: "/images/foto5.jpg", alt: "fns:köln Schulgelände und Insektenhotel",                  span: "" },
] as const;

const HIGHLIGHTS = [
  { Icon: Leaf,     text: "Lernen in & mit der Natur" },
  { Icon: Users,    text: "Jahrgangsmischung & Mentoren" },
  { Icon: TreePine, text: "Grüne Klassenzimmer & Ackerschule" },
  { Icon: Star,     text: "Natur · Mensch · Umwelt" },
] as const;

export function Gallery() {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <section id="galerie" className="section" style={{ backgroundColor: "#fff" }} aria-labelledby="gal-h">
      <div className="container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label mb-4">Einblicke in unsere Schule</p>
          <h2 id="gal-h" className="heading-xl mb-5" style={{ textAlign: "center" }}>
            Das sind wir.
          </h2>
          <p className="body-lg mx-auto mb-8" style={{ textAlign: "center", maxWidth: "44rem" }}>
            Die fns:köln ist keine gewöhnliche Schule. Hier lernen Kinder mit echter Freude,
            wachsen in der Natur und werden Teil einer Gemeinschaft, die trägt —
            <strong style={{ color: "#2a3418" }}> seit 2022 in Köln-Rodenkirchen.</strong>
          </p>

          {/* Highlight pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
            {HIGHLIGHTS.map(({ Icon, text }) => (
              <div key={text}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#f0f5e0", borderRadius: "9999px", padding: "0.625rem 1.25rem",
                  border: "1px solid rgba(117,138,43,0.18)" }}>
                <Icon style={{ width: "1rem", height: "1rem", color: "#758a2b", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4a5a14" }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Motto band */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ background: "linear-gradient(135deg,#4a5a14 0%,#758a2b 100%)",
            borderRadius: "1.25rem", padding: "1.75rem 2.5rem", marginBottom: "2.5rem",
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(200,216,122,0.8)" }}>
            Unser Motto
          </p>
          <p style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
            &bdquo;Kinder sollen nicht nur lernen &mdash; sie sollen <em style={{ color: "#c8d87a", fontStyle: "normal" }}>aufblühen</em>.&ldquo;
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "36rem", lineHeight: 1.65 }}>
            Unser Sommerfest ist das perfekte Bild davon: offen, lebendig, für alle.
            Erlebt selbst, was eine freie Naturschule ausmacht — und warum Lernen so viel schöner sein kann.
          </p>
        </motion.div>

        {/* Photo masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[240px] gap-4" role="list">
          {PHOTOS.map((p, i) => (
            <motion.div key={p.src} role="listitem"
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${p.span}`}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay: i * 0.07 }}
              onClick={() => setLb(i)}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setLb(i); }}
              tabIndex={0} aria-label={`Vergrößern: ${p.alt}`}>
              <Image src={p.src} alt={p.alt} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,400px" />
              <div className="absolute inset-0 bg-[#2a3418]/0 group-hover:bg-[#2a3418]/35 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLb(null)} role="dialog" aria-modal="true" aria-label={PHOTOS[lb].alt}>
            <button onClick={() => setLb(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2"
              aria-label="Schließen">
              <X className="w-6 h-6" />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={e => e.stopPropagation()}>
              <Image src={PHOTOS[lb].src} alt={PHOTOS[lb].alt} fill
                className="object-contain rounded-xl" sizes="90vw" quality={90} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
