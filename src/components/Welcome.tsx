"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TAGS = [
  "Freude am Lernen",
  "Naturverbundenheit",
  "Gemeinschaft",
  "Individuelle Förderung",
  "Toleranz & Weltoffenheit",
  "Respekt",
];

export function Welcome() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".wrev", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="section"
      style={{ backgroundColor: "#fafaf7" }}
      aria-labelledby="welcome-h"
    >
      <div className="container">

        {/* ── Centered text block ── */}
        <div style={{ maxWidth: "52rem", marginInline: "auto", textAlign: "center" }}>

          <div className="wrev ornament" style={{ marginBottom: "2rem" }}><span /><span /><span /></div>

          <p className="wrev section-label mb-5">10. Juli 2026 · Köln-Rodenkirchen</p>

          <h2
            id="welcome-h"
            className="wrev heading-xl mb-7"
            style={{ textAlign: "center", color: "#2a3418" }}
          >
            Vier Jahre voller{" "}
            <span style={{ color: "#758a2b" }}>Natur</span>,{" "}
            <span style={{ color: "#758a2b" }}>Mensch</span>
            {" & "}
            <span style={{ color: "#758a2b" }}>Gemeinschaft.</span>
          </h2>

          <p className="wrev body-lg mb-6" style={{ textAlign: "center" }}>
            Seit 2022 ist die fns:köln ein Ort, an dem Kinder mit echter Begeisterung
            lernen, die Natur entdecken und zu einer starken Gemeinschaft zusammenwachsen.
            Jetzt feiern wir diesen Meilenstein —{" "}
            <strong style={{ color: "#2a3418" }}>und ihr seid alle dabei!</strong>
          </p>

          <p className="wrev body-md mb-12" style={{ textAlign: "center" }}>
            Bringt eure Familie und Freunde mit, stöbert, staunt und lasst euch verzaubern
            von dem, was in vier Jahren gemeinsam entstanden ist.
          </p>

          <div className="wrev" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {TAGS.map((v) => (
              <span key={v} className="tag">{v}</span>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
