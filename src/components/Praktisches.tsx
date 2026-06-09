"use client";

import { motion } from "framer-motion";
import { Ticket, ClipboardList, Accessibility, CloudRain } from "lucide-react";

const INFO = [
  {
    icon: Ticket,
    title: "Eintritt frei",
    description:
      "Das Sommerfest ist für alle kostenlos! Eine Spendenbox steht bereit — jeder Beitrag hilft uns, unsere naturpädagogischen Projekte weiterzuentwickeln.",
    color: "#61ce70",
    bg: "#61ce7015",
    highlight: "Kostenlos",
  },
  {
    icon: ClipboardList,
    title: "Keine Anmeldung nötig",
    description:
      "Einfach vorbeikommen! Eine Anmeldung ist nicht erforderlich — bringt eure Familie, Freunde und Nachbarn mit. Je mehr, desto schöner!",
    color: "#6ec1e4",
    bg: "#6ec1e415",
    highlight: "Spontan willkommen",
  },
  {
    icon: Accessibility,
    title: "Barrierefrei",
    description:
      "Das Festgelände im Innenhof der Wachsfabrik ist vollständig barrierefrei und kinderwagentauglich — alle sind herzlich willkommen.",
    color: "#758a2b",
    bg: "#758a2b15",
    highlight: "Für jeden zugänglich",
  },
  {
    icon: CloudRain,
    title: "Wetterfest",
    description:
      "Unser Sommerfest findet bei jedem Wetter statt! Egal ob Sonne, Wolken oder ein leichter Schauer — wir sind bereit. Also: auf geht's!",
    color: "#f5c842",
    bg: "#f5c84215",
    highlight: "Immer dabei",
  },
] as const;

export function Praktisches() {
  return (
    <section
      id="praktisches"
      className="section-padding bg-white"
      aria-labelledby="praktisches-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6ec1e4] mb-3">
            Alles Wichtige auf einen Blick
          </p>
          <h2
            id="praktisches-heading"
            className="text-4xl sm:text-5xl font-black text-[#54595f]"
          >
            Praktisches.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFO.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ backgroundColor: item.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}25` }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.highlight}
                </span>

                <h3 className="text-base font-bold text-[#54595f] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #6ec1e4 0%, #61ce70 60%, #758a2b 100%)",
          }}
        >
          <div className="px-8 py-10 text-center text-white">
            <div className="text-4xl mb-3" aria-hidden="true">🌿</div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Wir freuen uns auf euch!
            </h3>
            <p className="text-white/85 max-w-xl mx-auto text-base">
              Am <strong>Freitag, 10. Juli 2026</strong> von{" "}
              <strong>15 bis 18 Uhr</strong> an der{" "}
              <strong>Wachsfabrik 25 (Innenhof)</strong>, 50996 Köln.
              Eintritt frei, für die ganze Familie!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
