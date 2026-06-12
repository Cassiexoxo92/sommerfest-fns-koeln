"use client";
import { motion } from "framer-motion";
import { Ticket, ClipboardList, Accessibility, CloudSun, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface InfoItem {
  readonly Icon: LucideIcon;
  readonly title: string;
  readonly highlight: string;
  readonly desc: string;
}

const INFO: InfoItem[] = [
  {
    Icon: Ticket,
    title: "Eintritt frei",
    highlight: "Kostenlos",
    desc: "Das Sommerfest ist für alle kostenlos! Eine Spendenbox steht bereit — jeder Beitrag hilft uns, unsere naturpädagogischen Projekte weiterzuführen.",
  },
  {
    Icon: ClipboardList,
    title: "Keine Anmeldung nötig",
    highlight: "Einfach kommen",
    desc: "Keine Anmeldung erforderlich — kommt einfach vorbei! Bringt Familie, Freunde und Nachbarn mit. Je mehr, desto schöner!",
  },
  {
    Icon: Accessibility,
    title: "Barrierefrei",
    highlight: "Für jeden zugänglich",
    desc: "Der Innenhof der Wachsfabrik ist vollständig barrierefrei und kinderwagentauglich. Alle sind herzlich willkommen.",
  },
  {
    Icon: CloudSun,
    title: "Wetterfest",
    highlight: "Findet statt",
    desc: "Das Fest findet bei jedem Wetter statt. Egal ob Sonne oder Wolken — wir sind bereit. Also: auf geht's!",
  },
];

export function Praktisches() {
  return (
    <section id="praktisches" className="section" style={{ backgroundColor: "#fff" }} aria-labelledby="prakt-h">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label mb-4">Alles auf einen Blick</p>
          <h2 id="prakt-h" className="heading-xl" style={{ textAlign: "center" }}>
            Praktisches.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {INFO.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="card p-7 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: "#f0f5e0" }}
                aria-hidden="true"
              >
                <item.Icon className="w-7 h-7" style={{ color: "#758a2b" }} />
              </div>

              <span
                style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.09em", backgroundColor: "#758a2b",
                  color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "9999px", marginBottom: "1.25rem",
                  whiteSpace: "nowrap" }}
              >
                {item.highlight}
              </span>

              <h3 className="heading-md mb-3">{item.title}</h3>
              <p className="body-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-10 sm:p-14 text-center text-white"
          style={{ background: "linear-gradient(135deg, #4a5a14 0%, #758a2b 100%)" }}
        >
          <div
            style={{ width: "4rem", height: "4rem", borderRadius: "9999px", display: "flex",
              alignItems: "center", justifyContent: "center", marginInline: "auto", marginBottom: "1.25rem",
              backgroundColor: "rgba(255,255,255,0.15)" }}
            aria-hidden="true"
          >
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-center">
            Wir freuen uns auf euch!
          </h3>
          <p className="text-white/85 max-w-lg mx-auto text-lg leading-relaxed text-center">
            <strong className="text-white">Freitag, 10. Juli 2026 · 15–18 Uhr</strong>
            <br />
            An der Wachsfabrik 25 (Innenhof), 50996 Köln
            <br />
            Eintritt frei · Keine Anmeldung · Für die ganze Familie
          </p>
        </motion.div>

      </div>
    </section>
  );
}
