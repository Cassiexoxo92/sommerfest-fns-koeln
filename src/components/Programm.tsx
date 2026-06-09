"use client";
import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Bug, Users, Sparkles, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProgramItem {
  readonly Icon: LucideIcon;
  readonly title: string;
  readonly desc: string;
  readonly tag: string;
  readonly color: string;
}

const ITEMS: ProgramItem[] = [
  {
    Icon: Sparkles,
    title: "Spannendes Programm",
    desc: "Groß und Klein erwartet ein buntes Programm voller Überraschungen und unvergesslicher Momente. Lasst euch einfach überraschen!",
    tag: "Für alle",
    color: "#758a2b",
  },
  {
    Icon: Coffee,
    title: "Café Krümel & Schülerkiosk",
    desc: "Leckere Snacks, selbst Gebackenes und erfrischende Getränke erwarten euch. Unser gemütliches Café versorgt die ganze Familie.",
    tag: "Genuss",
    color: "#4a5a14",
  },
  {
    Icon: ShoppingBag,
    title: "Schülerlädchen",
    desc: "Vintage-Schätze, kreative Unikate, besondere Fundstücke — ein bunter Markt zum Stöbern, Entdecken und Mitnehmen.",
    tag: "Vintage Markt",
    color: "#758a2b",
  },
  {
    Icon: Bug,
    title: "Kölns größtes Insektenhotel",
    desc: "Entdeckt unser Naturwunder! Das riesige Insektenhotel ist ein Herzstück der fns:köln — staunt und lernt die Welt der Insekten kennen.",
    tag: "Natur",
    color: "#4a5a14",
  },
  {
    Icon: Users,
    title: "Führungen & Ansprechpartner",
    desc: "Lernt die fns:köln hautnah kennen. Unsere Ansprechpartner begleiten euch gerne durch das Gelände und beantworten alle Fragen.",
    tag: "Entdecken",
    color: "#758a2b",
  },
  {
    Icon: Gift,
    title: "…und vieles mehr!",
    desc: "Lasst euch überraschen! Noch viele weitere Aktivitäten, Begegnungen und Highlights warten auf euch beim Sommerfest.",
    tag: "Überraschung",
    color: "#4a5a14",
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
          <h2 id="prog-h" className="heading-xl mb-5" style={{ textAlign: "center" }}>
            Das Programm.
          </h2>
          <p className="body-lg max-w-2xl mx-auto" style={{ textAlign: "center" }}>
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
              className="card p-8"
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              >
                <item.Icon className="w-7 h-7 text-white" />
              </div>

              <span className="tag mb-4 inline-block">{item.tag}</span>
              <h3 className="heading-md mt-3 mb-3">{item.title}</h3>
              <p className="body-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
