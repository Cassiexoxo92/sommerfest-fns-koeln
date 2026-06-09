"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    <section ref={ref} className="section" style={{ backgroundColor: "#fafaf7" }} aria-labelledby="welcome-h">
      <div className="container">

        {/* Centered intro text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="wrev ornament mb-8"><span/><span/><span/></div>
          <p className="wrev section-label mb-4">10. Juli 2026 · Köln-Rodenkirchen</p>

          <h2 id="welcome-h" className="wrev heading-xl mb-6" style={{ textAlign: "center" }}>
            Vier Jahre voller{" "}
            <span style={{ color: "#758a2b" }}>Natur</span>,<br/>
            <span style={{ color: "#758a2b" }}>Mensch</span>
            {" "}&amp;{" "}
            <span style={{ color: "#758a2b" }}>Gemeinschaft.</span>
          </h2>

          <p className="wrev body-lg mb-5 max-w-2xl mx-auto">
            Seit 2022 ist die fns:köln ein Ort, an dem Kinder mit echter Begeisterung lernen,
            die Natur entdecken und zu einer starken Gemeinschaft zusammenwachsen.
            Jetzt feiern wir diesen Meilenstein —{" "}
            <strong style={{ color: "#2a3418" }}>und ihr seid alle dabei!</strong>
          </p>
          <p className="wrev body-md mb-10 max-w-xl mx-auto">
            Bringt eure Familie und Freunde mit, stöbert, staunt und lasst euch verzaubern
            von dem, was in vier Jahren gemeinsam entstanden ist.
          </p>

          <div className="wrev flex flex-wrap justify-center gap-2">
            {["Freude am Lernen","Naturverbundenheit","Gemeinschaft","Individuelle Förderung","Toleranz & Weltoffenheit","Respekt"].map(v => (
              <span key={v} className="tag">{v}</span>
            ))}
          </div>
        </div>

        {/* Photo grid 2×2 – more elaborate layout */}
        <div className="wrev grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {/* Large photo spanning 2 columns + 2 rows on desktop */}
          <div className="relative col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/foto3.jpg" alt="fns:köln Schulleben in der Natur" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw,50vw" />
          </div>
          {/* Three smaller photos */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/foto4.jpg" alt="Kinder und Natur" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 50vw,25vw" />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/foto5.jpg" alt="Gemeinschaft bei fns:köln" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 50vw,25vw" />
          </div>
          {/* Stock photo — royalty-free, nature/outdoor scene (Unsplash) */}
          <div className="relative col-span-2 aspect-[16/7] rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/stock2.jpg" alt="Sommer im Freien" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw,50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a3418]/40 to-transparent flex items-end p-5">
              <span className="text-white font-semibold text-sm drop-shadow">Natur erleben · Gemeinsam wachsen</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
