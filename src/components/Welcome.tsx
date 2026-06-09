"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Welcome() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        els,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="welcome"
      ref={ref}
      className="section-padding bg-[#f9f8f4]"
      aria-label="Willkommen beim Sommerfest"
    >
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="reveal flex justify-center mb-6" aria-hidden="true">
            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-[#6ec1e4]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#61ce70]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#6ec1e4]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#758a2b]" />
              <div className="h-px w-16 bg-[#6ec1e4]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-black text-[#54595f] leading-tight mb-6">
            Vier Jahre voller{" "}
            <span className="text-[#6ec1e4]">Wachstum</span>,{" "}
            <span className="text-[#61ce70]">Natur</span>{" "}
            &amp; <span className="text-[#758a2b]">Gemeinschaft.</span>
          </h2>

          {/* Lead text */}
          <p className="reveal text-lg sm:text-xl text-[#7a7a7a] leading-relaxed mb-8 max-w-2xl mx-auto">
            Seit 2022 ist die fns:Köln ein Ort, an dem Kinder mit Begeisterung
            lernen, die Natur entdecken und als Gemeinschaft zusammenwachsen.
            Jetzt feiern wir diesen besonderen Meilenstein —{" "}
            <strong className="text-[#54595f]">und ihr seid alle eingeladen!</strong>
          </p>

          <p className="reveal text-base text-[#7a7a7a] leading-relaxed mb-10 max-w-xl mx-auto">
            Bringt eure ganze Familie mit, tauscht euch aus, stöbert, staunt
            und lasst euch von dem verzaubern, was unsere Schülerinnen und
            Schüler in vier Jahren gemeinsam erschaffen haben.
          </p>

          {/* Value bubbles */}
          <div className="reveal flex flex-wrap justify-center gap-3">
            {[
              { label: "Freude am Lernen", color: "#6ec1e4" },
              { label: "Naturverbundenheit", color: "#61ce70" },
              { label: "Gemeinschaft", color: "#758a2b" },
              { label: "Toleranz", color: "#6ec1e4" },
              { label: "Individuelle Förderung", color: "#61ce70" },
              { label: "Respekt", color: "#758a2b" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: color }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative photo strip */}
        <div className="reveal mt-16 grid grid-cols-3 gap-3 max-w-3xl mx-auto" aria-hidden="true">
          {["/images/foto2.jpg", "/images/foto3.jpg", "/images/foto4.jpg"].map(
            (src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
