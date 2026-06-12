"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Bug, Users, Sparkles, Gift } from "lucide-react";

export function Programm() {
  return (
    <section id="programm" className="section" style={{ backgroundColor: "#f0f5e0" }} aria-labelledby="prog-h">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p className="section-label mb-4" style={{ textAlign: "center" }}>Was erwartet euch?</p>
          <h2 id="prog-h" className="heading-xl mb-5" style={{ textAlign: "center" }}>
            Das Programm.
          </h2>
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.8, color: "#54595f",
              textAlign: "center", maxWidth: "40rem", marginInline: "auto" }}>
            Von Leckereien bis zu Naturentdeckungen — für jeden ist etwas dabei.
          </p>
        </motion.div>

        {/* Row 1: Big photo feature + 2 stacked icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

          {/* Big photo card */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", minHeight: "420px" }}
          >
            <Image
              src="/images/foto3.jpg"
              alt="Gemeinschaft und Begegnung beim Sommerfest fns:köln"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div aria-hidden="true"
              style={{ position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(20,32,6,0.93) 0%, rgba(20,32,6,0.45) 55%, transparent 100%)" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(154,173,59,0.22)", border: "1px solid rgba(200,216,122,0.35)",
                  borderRadius: "9999px", padding: "0.35rem 0.875rem", marginBottom: "0.875rem" }}>
                <Sparkles style={{ width: "0.875rem", height: "0.875rem", color: "#c8d87a" }} aria-hidden="true" />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.12em", color: "#c8d87a" }}>Für alle</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.875rem)", fontWeight: 800,
                  color: "#fff", lineHeight: 1.2, marginBottom: "0.625rem" }}>
                Buntes Programm für Groß &amp; Klein
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
                Spiele, Workshops und unvergessliche Momente — ein Nachmittag voller Leben und Begegnung!
              </p>
            </div>
          </motion.div>

          {/* Right: 2 stacked icon cards */}
          <div className="flex flex-col gap-5">

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: "#fff", borderRadius: "1.25rem", padding: "1.75rem",
                  border: "1px solid rgba(117,138,43,0.12)", flex: "1" }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", flexShrink: 0,
                    background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Coffee style={{ width: "1.25rem", height: "1.25rem", color: "#758a2b" }} aria-hidden="true" />
                </div>
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "#9aad3b", display: "block", marginBottom: "0.25rem" }}>
                    Kulinarik
                  </span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#2a3418",
                      marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    Café Krümel & Schülerkiosk
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#54595f", lineHeight: 1.65 }}>
                    Frisch Gebackenes, leckere Snacks und kühle Getränke — unser Café lädt zum Verweilen ein.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: "#fff", borderRadius: "1.25rem", padding: "1.75rem",
                  border: "1px solid rgba(117,138,43,0.12)", flex: "1" }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", flexShrink: 0,
                    background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShoppingBag style={{ width: "1.25rem", height: "1.25rem", color: "#758a2b" }} aria-hidden="true" />
                </div>
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "#9aad3b", display: "block", marginBottom: "0.25rem" }}>
                    Vintage Markt
                  </span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#2a3418",
                      marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    Schülerlädchen
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#54595f", lineHeight: 1.65 }}>
                    Vintage-Schätze, kreative Unikate und besondere Fundstücke — stöbert und entdeckt!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2: Insektenhotel — wide feature with real photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 mb-5"
          style={{ borderRadius: "1.5rem", overflow: "hidden" }}
        >
          {/* Text side */}
          <div style={{ background: "#2e3a0a", padding: "3rem",
              display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "280px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(154,173,59,0.2)", borderRadius: "9999px",
                padding: "0.4rem 1rem", marginBottom: "1.25rem", alignSelf: "flex-start" }}>
              <Bug style={{ width: "0.875rem", height: "0.875rem", color: "#9aad3b" }} aria-hidden="true" />
              <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.12em", color: "#9aad3b" }}>Natur-Highlight</span>
            </div>
            <h3 style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.875rem)", fontWeight: 800,
                color: "#fff", lineHeight: 1.2, marginBottom: "0.875rem" }}>
              Kölns größtes Insektenhotel
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              Ein echtes Naturwunder! Das riesige Insektenhotel ist das Herzstück der fns:köln —
              staunt gemeinsam und entdeckt die faszinierende Welt der Insekten.
            </p>
          </div>

          {/* Photo side */}
          <div style={{ position: "relative", minHeight: "280px" }}>
            <Image
              src="/images/foto5.jpg"
              alt="Das Insektenhotel der fns:köln — Kölns größtes Insektenhotel"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Row 3: Bottom 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem",
                border: "1px solid rgba(117,138,43,0.12)" }}
          >
            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem",
                background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem" }}>
              <Users style={{ width: "1.375rem", height: "1.375rem", color: "#758a2b" }} aria-hidden="true" />
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#9aad3b", display: "block", marginBottom: "0.4rem" }}>
              Entdecken
            </span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#2a3418",
                marginBottom: "0.625rem", lineHeight: 1.3 }}>
              Führungen & Gespräche
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#54595f", lineHeight: 1.65 }}>
              Lernt die fns:köln hautnah kennen. Ansprechpartner begleiten euch durchs Gelände,
              erklären das Schulkonzept und beantworten alle Fragen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{ background: "linear-gradient(135deg, #4a5a14 0%, #758a2b 100%)",
                borderRadius: "1.25rem", padding: "2rem" }}
          >
            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem" }}>
              <Gift style={{ width: "1.375rem", height: "1.375rem", color: "#fff" }} aria-hidden="true" />
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(200,216,122,0.9)", display: "block", marginBottom: "0.4rem" }}>
              Überraschung
            </span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff",
                marginBottom: "0.625rem", lineHeight: 1.3 }}>
              &hellip;und vieles mehr!
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
              Überraschungen, spontane Momente und echte Begegnungen warten auf euch.
              Das Beste am Fest ist das, was man nicht plant — kommt einfach vorbei!
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
