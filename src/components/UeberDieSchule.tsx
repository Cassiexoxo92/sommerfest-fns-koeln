"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function UeberDieSchule() {
  return (
    <section id="ueber-uns" className="section" style={{background:"linear-gradient(135deg,#2e3a0a 0%,#4a5a14 60%,#758a2b 100%)"}} aria-labelledby="ueber-h">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{opacity:0,x:-36}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}>
            <Image src="/images/logo.png" alt="fns:köln Logo" width={200} height={69} className="h-16 w-auto object-contain brightness-0 invert mb-8" />
            <h2 id="ueber-h" className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Eine Schule, die das<br/><span style={{color:"#9aad3b"}}>Leben</span> lehrt.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Die fns:köln ist eine freie Grund- und Gesamtschule, die 2022 mit einer kraftvollen Idee gestartet ist:
              Kinder sollen nicht nur lernen — sie sollen <strong className="text-white">aufblühen</strong>.
            </p>
            <p className="text-white/75 text-base leading-relaxed mb-8">
              In jahrgangsgemischten Stammgruppen, mit festen Mentoren und einem Schulleben mitten in der Natur
              wachsen unsere Schülerinnen und Schüler zu selbstständigen, empathischen und neugierigen jungen Menschen heran.
              Seit dem Schuljahr 2025/26 gibt es auch unsere Oberstufe.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Naturpädagogik","Jahrgangsgemischtes Lernen","Individuelle Mentoren","Grüne Klassenzimmer","Ackerschule"].map(v=>(
                <span key={v} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/25 text-white/80">{v}</span>
              ))}
            </div>
            <Link href="https://freie-naturschulen.de" target="_blank" rel="noopener noreferrer" className="btn-white" aria-label="Mehr über fns:köln erfahren auf freie-naturschulen.de">
              Mehr über fns:köln erfahren
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div initial={{opacity:0,x:36}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.15,ease:[0.16,1,0.3,1]}} className="relative" aria-hidden="true">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/foto1.jpg" alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw,50vw" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#758a2b]/15">
              <p className="text-xs font-bold text-[#758a2b] uppercase tracking-wider mb-0.5">Gegründet 2022</p>
              <p className="text-sm font-semibold text-[#2a3418]">Köln-Rodenkirchen</p>
              <p className="text-xs text-[#7a7a7a]">Natur · Mensch · Umwelt</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
