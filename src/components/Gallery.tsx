"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const PHOTOS = [
  { src:"/images/foto1.jpg", alt:"Schülerinnen und Schüler der fns:köln beim Sommerfest", span:"sm:col-span-2 sm:row-span-2" },
  { src:"/images/foto2.jpg", alt:"Natur erleben — fns:köln Schulalltag", span:"" },
  { src:"/images/foto3.jpg", alt:"Gemeinschaft und Lernen an der fns:köln", span:"" },
  { src:"/images/foto4.jpg", alt:"Freie Naturschule Köln — Naturpädagogik", span:"sm:col-span-2" },
  { src:"/images/foto5.jpg", alt:"fns:köln Schulgelände und Insektenhotel", span:"" },
] as const;

export function Gallery() {
  const [lb, setLb] = useState<number|null>(null);
  return (
    <section id="galerie" className="section" style={{backgroundColor:"#fff"}} aria-labelledby="gal-h">
      <div className="container">
        <motion.div initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-center mb-12">
          <p className="section-label mb-3">Einblicke</p>
          <h2 id="gal-h" className="heading-xl mb-4">Das sind wir.</h2>
          <p className="body-lg max-w-lg mx-auto">Vier Jahre voller Momente — ein kleiner Vorgeschmack auf das, was euch erwartet.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[260px] gap-4" role="list">
          {PHOTOS.map((p,i) => (
            <motion.div key={p.src} role="listitem"
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${p.span}`}
              initial={{opacity:0,scale:0.97}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-40px"}}
              transition={{duration:0.55,delay:i*0.07}}
              onClick={()=>setLb(i)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" ")setLb(i)}}
              tabIndex={0} aria-label={`Vergrößern: ${p.alt}`}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,400px" />
              <div className="absolute inset-0 bg-[#2a3418]/0 group-hover:bg-[#2a3418]/35 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lb!==null && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
            onClick={()=>setLb(null)} role="dialog" aria-modal="true" aria-label={PHOTOS[lb].alt}
          >
            <button onClick={()=>setLb(null)} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2" aria-label="Schließen">
              <X className="w-6 h-6" />
            </button>
            <motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}} transition={{duration:0.25,ease:[0.16,1,0.3,1]}}
              className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={e=>e.stopPropagation()}
            >
              <Image src={PHOTOS[lb].src} alt={PHOTOS[lb].alt} fill className="object-contain rounded-xl" sizes="90vw" quality={90} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
