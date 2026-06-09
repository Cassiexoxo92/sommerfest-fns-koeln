"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coffee, ShoppingBag, Bug, Users, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROGRAM_ITEMS = [
  {
    icon: Sparkles,
    title: "Spannendes Programm",
    description:
      "Groß und Klein erwartet ein buntes Programm voller Überraschungen, Spaß und unvergesslicher Momente. Lasst euch überraschen!",
    color: "#6ec1e4",
    bgColor: "#6ec1e420",
    tag: "Für alle",
  },
  {
    icon: Coffee,
    title: "Café Krümel & Kiosk",
    description:
      "Süßes, Herzhaftes und leckere Getränke warten auf euch! Unser gemütliches Café Krümel und der Schülerkiosk versorgen euch mit allem, was das Herz begehrt.",
    color: "#758a2b",
    bgColor: "#758a2b20",
    tag: "Genuss",
  },
  {
    icon: ShoppingBag,
    title: "Schülerlädchen",
    description:
      "Vintage-Schätze, kreative Unikate und besondere Fundstücke — unser Schülerlädchen ist ein bunter Vintage-Markt zum Stöbern, Entdecken und Mitnehmen.",
    color: "#f5c842",
    bgColor: "#f5c84220",
    tag: "Shopping",
  },
  {
    icon: Bug,
    title: "Kölns größtes Insektenhotel",
    description:
      "Besucht ein echtes Naturwunder! Unser riesiges Insektenhotel ist ein Herzstück unserer Schule — entdeckt, staunet und erfahrt mehr über die faszinierende Welt der Insekten.",
    color: "#61ce70",
    bgColor: "#61ce7020",
    tag: "Natur",
  },
  {
    icon: Users,
    title: "Führungen & Ansprechpartner",
    description:
      "Lernt die fns:Köln hautnah kennen! Unsere Ansprechpartnerinnen und Ansprechpartner stehen euch mit Rat und Tat zur Seite und führen euch gerne durch unser Gelände.",
    color: "#6ec1e4",
    bgColor: "#6ec1e420",
    tag: "Entdecken",
  },
] as const;

export function Programm() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".program-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".program-header",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="programm"
      ref={ref}
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #f9f8f4 0%, #ffffff 100%)" }}
      aria-labelledby="programm-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="program-header text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6ec1e4] mb-3">
            10. Juli 2026 · 15 – 18 Uhr
          </p>
          <h2
            id="programm-heading"
            className="text-4xl sm:text-5xl font-black text-[#54595f] mb-4"
          >
            Was erwartet euch?
          </h2>
          <p className="text-lg text-[#7a7a7a] max-w-2xl mx-auto">
            Von Leckereien bis zu Naturentdeckungen — beim Sommerfest ist für
            jeden etwas dabei. Es wird ein Nachmittag voller Freude,
            Begegnung und Leichtigkeit.
          </p>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAM_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-default"
                aria-label={item.title}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: item.bgColor }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3"
                  style={{
                    color: item.color,
                    backgroundColor: item.bgColor,
                  }}
                >
                  {item.tag}
                </span>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#54595f] mb-3 group-hover:text-[#6ec1e4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}

          {/* "Und vieles mehr" card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#6ec1e4] to-[#61ce70] rounded-2xl p-7 text-white flex flex-col justify-between"
            aria-label="Und vieles mehr"
          >
            <div>
              <div className="text-4xl mb-4" aria-hidden="true">🎉</div>
              <h3 className="text-xl font-black mb-3">
                … und noch vieles mehr!
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Lasst euch überraschen! Beim Sommerfest gibt es
                noch viele weitere Aktivitäten, Begegnungen und
                Highlights, die wir schon vorbereiten.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/25">
              <p className="text-sm font-semibold">
                Eintritt frei · Alle sind herzlich willkommen!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
