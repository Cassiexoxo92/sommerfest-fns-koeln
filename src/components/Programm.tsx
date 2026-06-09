"use client";
import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Bug, Users, Sparkles, Gift } from "lucide-react";

const ITEMS = [
  { icon: Sparkles,    emoji:"🎪", title:"Spannendes Programm",      desc:"Groß und Klein erwartet ein buntes Programm voller Überraschungen und unvergesslicher Momente. Lasst euch einfach überraschen!",     tag:"Für alle" },
  { icon: Coffee,      emoji:"☕", title:"Café Krümel & Schülerkiosk", desc:"Leckere Snacks, selbst Gebackenes und erfrischende Getränke erwarten euch. Unser gemütliches Café versorgt die ganze Familie.",          tag:"Genuss" },
  { icon: ShoppingBag, emoji:"🛍️", title:"Schülerlädchen",           desc:"Vintage-Schätze, kreative Unikate, besondere Fundstücke — ein bunter Markt zum Stöbern, Entdecken und Mitnehmen.",                        tag:"Vintage Markt" },
  { icon: Bug,         emoji:"🌿", title:"Kölns größtes Insektenhotel", desc:"Entdeckt unser Naturwunder! Das riesige Insektenhotel ist ein Herzstück der fns:köln — staunt und lernt die faszinierende Welt der Insekten kennen.", tag:"Natur" },
  { icon: Users,       emoji:"🗺️", title:"Führungen & Ansprechpartner", desc:"Lernt die fns:köln hautnah kennen. Unsere Ansprechpartner begleiten euch gerne durch das Gelände und beantworten alle Fragen.",         tag:"Entdecken" },
  { icon: Gift,        emoji:"🎉", title:"…und vieles mehr!",          desc:"Lasst euch überraschen! Noch viele weitere Aktivitäten, Begegnungen und Highlights warten auf euch beim Sommerfest.",                    tag:"Überraschung" },
] as const;

export function Programm() {
  return (
    <section id="programm" className="section" style={{ backgroundColor:"#f0f5e0" }} aria-labelledby="prog-h">
      <div className="container">
        <motion.div initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-center mb-14">
          <p className="section-label mb-3">Was erwartet euch?</p>
          <h2 id="prog-h" className="heading-xl mb-4">Das Programm.</h2>
          <p className="body-lg max-w-xl mx-auto">Von Leckereien bis zu Naturentdeckungen — für jeden ist etwas dabei.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item,i) => (
            <motion.article key={item.title}
              initial={{opacity:0,y:44}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}}
              transition={{duration:0.55,delay:i*0.08,ease:[0.16,1,0.3,1]}}
              whileHover={{y:-5,transition:{duration:0.2}}}
              className="card p-7"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{item.emoji}</div>
              <span className="tag mb-3">{item.tag}</span>
              <h3 className="heading-md mt-3 mb-2">{item.title}</h3>
              <p className="body-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
