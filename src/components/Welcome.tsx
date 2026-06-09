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
        <div className="max-w-3xl mx-auto text-center">
          <div className="wrev ornament mb-8"><span/><span/><span/></div>
          <p className="wrev section-label mb-4">10. Juli 2026 · Köln-Rodenkirchen</p>
          <h2 id="welcome-h" className="wrev heading-xl mb-6">
            Vier Jahre voller <span style={{ color: "#758a2b" }}>Natur</span>,<br/>
            <span style={{ color: "#758a2b" }}>Mensch</span> &amp; <span style={{ color: "#758a2b" }}>Gemeinschaft.</span>
          </h2>
          <p className="wrev body-lg mb-5 max-w-2xl mx-auto">
            Seit 2022 ist die fns:köln ein Ort, an dem Kinder mit echter Begeisterung lernen,
            die Natur entdecken und zu einer starken Gemeinschaft zusammenwachsen.
            Jetzt feiern wir diesen Meilenstein — <strong style={{ color: "#2a3418" }}>und ihr seid alle dabei!</strong>
          </p>
          <p className="wrev body-md mb-10 max-w-xl mx-auto">
            Bringt eure Familie und Freunde mit, stöbert, staunt und lasst euch verzaubern
            von dem, was in vier Jahren gemeinsam entstanden ist.
          </p>
          <div className="wrev flex flex-wrap justify-center gap-2 mb-14">
            {["Freude am Lernen","Naturverbundenheit","Gemeinschaft","Individuelle Förderung","Toleranz & Weltoffenheit","Respekt"].map(v => (
              <span key={v} className="tag">{v}</span>
            ))}
          </div>
        </div>
        <div className="wrev grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {["/images/foto3.jpg","/images/foto4.jpg","/images/foto5.jpg"].map((src,i) => (
            <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image src={src} alt="" fill className="object-cover" sizes="(max-width:640px) 100vw,350px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
