"use client";
import { motion } from "framer-motion";
import { MapPin, Train, ParkingCircle, Navigation2, ArrowRight } from "lucide-react";

const OSM = "https://www.openstreetmap.org/?mlat=50.8856&mlon=6.9560#map=17/50.8856/6.9560";

export function Anfahrt() {
  return (
    <section id="anfahrt" className="section" style={{ backgroundColor: "#fafaf7" }} aria-labelledby="anfahrt-h">
      <div className="container">

        {/* Header – centered */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label mb-4">So findet ihr uns</p>
          <h2 id="anfahrt-h" className="heading-xl mb-5" style={{ textAlign: "center" }}>
            Anfahrt.
          </h2>
          <p className="body-lg mx-auto" style={{ textAlign: "center", maxWidth: "36rem" }}>
            Gut erreichbar mit Bahn und Bus —
            im Innenhof der historischen Wachsfabrik in Köln-Rodenkirchen.
          </p>
        </motion.div>

        {/* Address hero – clickable OSM link */}
        <motion.a href={OSM} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "block", background: "linear-gradient(135deg,#4a5a14 0%,#758a2b 100%)",
            borderRadius: "1.5rem", padding: "2.75rem", marginBottom: "1.25rem",
            textDecoration: "none", position: "relative", overflow: "hidden" }}
          aria-label="Adresse auf OpenStreetMap öffnen">
          {/* Decorative circles */}
          <div aria-hidden="true" style={{ position: "absolute", right: "-3rem", top: "-3rem",
              width: "12rem", height: "12rem", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: "2rem", bottom: "-4rem",
              width: "16rem", height: "16rem", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <div style={{ position: "relative", display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", flexShrink: 0,
                  background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin style={{ width: "1.75rem", height: "1.75rem", color: "#fff" }} aria-hidden="true" />
              </div>
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "rgba(200,216,122,0.85)", marginBottom: "0.375rem" }}>
                  Veranstaltungsort
                </p>
                <p style={{ fontSize: "clamp(1.2rem,2.5vw,1.625rem)", fontWeight: 800,
                    color: "#fff", lineHeight: 1.2, marginBottom: "0.25rem" }}>
                  An der Wachsfabrik 25
                </p>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)" }}>
                  Innenhof · 50996 Köln-Rodenkirchen
                </p>
              </div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(255,255,255,0.15)", borderRadius: "9999px", padding: "0.75rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.25)", color: "#fff",
                fontSize: "0.9375rem", fontWeight: 700, flexShrink: 0 }}>
              <Navigation2 style={{ width: "1.125rem", height: "1.125rem" }} aria-hidden="true" />
              Karte öffnen
              <ArrowRight style={{ width: "1rem", height: "1rem" }} aria-hidden="true" />
            </div>
          </div>
        </motion.a>

        {/* 3 info cards */}
        <div style={{ display: "grid", gap: "1rem" }}
          className="grid grid-cols-1 sm:grid-cols-3">

          {/* ÖPNV */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", flexShrink: 0,
                  background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Train style={{ width: "1.375rem", height: "1.375rem", color: "#758a2b" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: "0.2rem" }}>Bahn & Bus</h3>
                <p style={{ fontSize: "0.8125rem", color: "#7a7a7a" }}>Öffentliche Verkehrsmittel</p>
              </div>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: "#7a7a7a", marginBottom: "0.625rem" }}>
                Bahnhof Sürth
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[{ n: "16", c: "#cc0000" }, { n: "130", c: "#758a2b" },
                  { n: "131", c: "#758a2b" }, { n: "134", c: "#758a2b" }].map(({ n, c }) => (
                  <span key={n} className="line-badge text-white font-bold"
                    style={{ backgroundColor: c }} aria-label={`Linie ${n}`}>{n}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: "#7a7a7a", marginBottom: "0.625rem" }}>
                Michaelshoven
              </p>
              <span className="line-badge text-white font-bold"
                style={{ backgroundColor: "#cc0000" }} aria-label="Linie 16">16</span>
            </div>
          </motion.div>

          {/* Parking */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
            className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", flexShrink: 0,
                  background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ParkingCircle style={{ width: "1.375rem", height: "1.375rem", color: "#758a2b" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: "0.2rem" }}>Parken</h3>
                <p style={{ fontSize: "0.8125rem", color: "#7a7a7a" }}>Hinweis für Autofahrer</p>
              </div>
            </div>
            <p className="body-sm" style={{ lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Eigene Parkplätze stehen nicht zur Verfügung.
              Im umliegenden Industriegebiet sind öffentliche Parkplätze zu finden.
            </p>
            <div style={{ background: "#f0f5e0", borderRadius: "0.875rem", padding: "0.875rem 1.125rem" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4a5a14", lineHeight: 1.5 }}>
                Tipp: Mit den Öffis kommen — stressfrei & nachhaltig!
              </p>
            </div>
          </motion.div>

          {/* Accessibility */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }}
            className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", flexShrink: 0,
                  background: "#f0f5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin style={{ width: "1.375rem", height: "1.375rem", color: "#758a2b" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: "0.2rem" }}>Zugänglichkeit</h3>
                <p style={{ fontSize: "0.8125rem", color: "#7a7a7a" }}>Für alle Besucher</p>
              </div>
            </div>
            <p className="body-sm" style={{ lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Das Gelände ist vollständig{" "}
              <strong style={{ color: "#2a3418" }}>barrierefrei</strong> und{" "}
              <strong style={{ color: "#2a3418" }}>kinderwagentauglich</strong>.
              Das Fest findet auch bei schlechtem Wetter statt.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Barrierefrei", "Kinderwagen", "Wetterfest"].map(t => (
                <span key={t} style={{ fontSize: "0.75rem", fontWeight: 700, color: "#758a2b",
                    background: "#f0f5e0", padding: "0.35rem 0.875rem", borderRadius: "9999px" }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
