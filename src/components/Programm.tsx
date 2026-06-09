"use client";
import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Bug, Users, Sparkles, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProgramItem {
  readonly num: string;
  readonly Icon: LucideIcon;
  readonly title: string;
  readonly desc: string;
  readonly tag: string;
  readonly accent: string;
  readonly bg: string;
}

const ITEMS: ProgramItem[] = [
  {
    num: "01",
    Icon: Sparkles,
    title: "Buntes Programm für alle",
    desc: "Spiele, Mitmach-Aktionen und unvergessliche Momente warten auf Groß und Klein. Von Workshops bis zur Bühne — ein Nachmittag voller Leben!",
    tag: "Für alle",
    accent: "#758a2b",
    bg: "#ffffff",
  },
  {
    num: "02",
    Icon: Coffee,
    title: "Café Krümel & Schülerkiosk",
    desc: "Leckere Snacks, frisch Gebackenes und kühle Getränke. Unser gemütliches Café lädt zum Verweilen ein und versorgt die ganze Familie.",
    tag: "Genuss",
    accent: "#9aad3b",
    bg: "#f8faf0",
  },
  {
    num: "03",
    Icon: ShoppingBag,
    title: "Schülerlädchen",
    desc: "Vintage-Schätze, kreative Unikate, besondere Fundstücke — ein bunter Markt zum Stöbern, Entdecken und Mitnehmen.",
    tag: "Vintage Markt",
    accent: "#4a5a14",
    bg: "#ffffff",
  },
  {
    num: "04",
    Icon: Bug,
    title: "Kölns größtes Insektenhotel",
    desc: "Ein echtes Naturwunder! Das riesige Insektenhotel ist das Herzstück der fns:köln — staunt gemeinsam und entdeckt die faszinierende Welt der Insekten.",
    tag: "Natur",
    accent: "#758a2b",
    bg: "#f8faf0",
  },
  {
    num: "05",
    Icon: Users,
    title: "Führungen & Gespräche",
    desc: "Lernt die fns:köln hautnah kennen. Ansprechpartner begleiten euch durchs Gelände, erklären das Schulkonzept und beantworten alle Fragen.",
    tag: "Entdecken",
    accent: "#9aad3b",
    bg: "#ffffff",
  },
  {
    num: "06",
    Icon: Gift,
    title: "…und vieles mehr!",
    desc: "Überraschungen, spontane Momente und echte Begegnungen warten auf euch. Das Beste am Fest ist das, was man nicht plant — kommt einfach vorbei!",
    tag: "Surprise",
    accent: "#4a5a14",
    bg: "#f8faf0",
  },
];

export function Programm() {
  return (
    <section id="programm" className="section" style={{ backgroundColor: "#f0f5e0" }} aria-labelledby="prog-h">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Was erwartet euch?</p>
          <h2 id="prog-h" className="heading-xl mb-5 text-center">
            Das Programm.
          </h2>
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.8, color: "#54595f",
              textAlign: "center", maxWidth: "40rem", marginInline: "auto" }}>
            Von Leckereien bis zu Naturentdeckungen — für jeden ist etwas dabei.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-2xl border border-[rgba(117,138,43,0.12)] shadow-sm transition-shadow hover:shadow-xl"
              style={{ backgroundColor: item.bg }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: item.accent }} aria-hidden="true" />

              <div className="p-8 relative">
                {/* Decorative number */}
                <span
                  className="absolute top-3 right-6 text-[6rem] font-black leading-none pointer-events-none select-none"
                  style={{ color: item.accent, opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {item.num}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.accent}1a` }}
                  aria-hidden="true"
                >
                  <item.Icon className="w-7 h-7" style={{ color: item.accent }} />
                </div>

                <span className="tag mb-4 inline-block">{item.tag}</span>
                <h3 className="heading-md mt-2 mb-3">{item.title}</h3>
                <p className="body-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
