"use client";
import { motion } from "framer-motion";

const INFO = [
  { emoji:"🎫", title:"Eintritt frei",         highlight:"Kostenlos",          desc:"Das Sommerfest ist für alle kostenlos! Eine Spendenbox steht bereit — jeder Beitrag hilft uns, unsere naturpädagogischen Projekte weiterzuführen." },
  { emoji:"📋", title:"Keine Anmeldung nötig", highlight:"Einfach vorbeikommen", desc:"Keine Anmeldung erforderlich — kommt einfach vorbei! Bringt Familie, Freunde und Nachbarn mit. Je mehr, desto schöner!" },
  { emoji:"♿", title:"Barrierefrei",           highlight:"Für jeden zugänglich", desc:"Der Innenhof der Wachsfabrik ist vollständig barrierefrei und kinderwagentauglich. Alle sind herzlich willkommen." },
  { emoji:"🌤️", title:"Wetterfest",            highlight:"Findet statt",        desc:"Das Fest findet bei jedem Wetter statt. Egal ob Sonne oder Wolken — wir sind bereit. Also: auf geht's!" },
] as const;

export function Praktisches() {
  return (
    <section id="praktisches" className="section" style={{backgroundColor:"#fff"}} aria-labelledby="prakt-h">
      <div className="container">
        <motion.div initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-center mb-14">
          <p className="section-label mb-3">Alles auf einen Blick</p>
          <h2 id="prakt-h" className="heading-xl">Praktisches.</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {INFO.map((item,i)=>(
            <motion.article key={item.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:0.55,delay:i*0.09}} className="card p-6">
              <div className="text-3xl mb-4" aria-hidden="true">{item.emoji}</div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 text-white" style={{backgroundColor:"#758a2b"}}>{item.highlight}</span>
              <h3 className="heading-md mb-2">{item.title}</h3>
              <p className="body-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.3}}
          className="rounded-3xl p-8 sm:p-12 text-center text-white" style={{background:"linear-gradient(135deg,#4a5a14 0%,#758a2b 100%)"}}>
          <div className="text-4xl mb-3" aria-hidden="true">🌿</div>
          <h3 className="text-2xl sm:text-3xl font-black mb-3">Wir freuen uns auf euch!</h3>
          <p className="text-white/80 max-w-lg mx-auto">
            <strong className="text-white">Freitag, 10. Juli 2026 · 15–18 Uhr</strong><br/>
            An der Wachsfabrik 25 (Innenhof), 50996 Köln<br/>
            Eintritt frei · Keine Anmeldung · Für die ganze Familie
          </p>
        </motion.div>
      </div>
    </section>
  );
}
