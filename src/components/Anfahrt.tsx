"use client";
import { motion } from "framer-motion";
import { MapPin, Train, ParkingCircle, Navigation2 } from "lucide-react";

const OSM = "https://www.openstreetmap.org/?mlat=50.8856&mlon=6.9560#map=17/50.8856/6.9560";

export function Anfahrt() {
  return (
    <section id="anfahrt" className="section" style={{backgroundColor:"#fafaf7"}} aria-labelledby="anfahrt-h">
      <div className="container">
        <motion.div initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-center mb-14">
          <p className="section-label mb-3">So findet ihr uns</p>
          <h2 id="anfahrt-h" className="heading-xl mb-4">Anfahrt.</h2>
          <p className="body-lg max-w-xl mx-auto">Gut erreichbar mit Bahn und Bus — im Innenhof der Wachsfabrik in Köln-Rodenkirchen.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Address */}
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor:"#f0f5e0"}}>
                  <MapPin className="w-5 h-5" style={{color:"#758a2b"}} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="heading-md mb-1">Adresse</h3>
                  <address className="not-italic body-sm leading-relaxed">
                    An der Wachsfabrik 25 (Innenhof)<br/>50996 Köln
                  </address>
                  <a href={OSM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold" style={{color:"#758a2b"}} aria-label="Auf OpenStreetMap anzeigen">
                    <Navigation2 className="w-3.5 h-3.5" aria-hidden="true" />Auf OpenStreetMap anzeigen
                  </a>
                </div>
              </div>
            </motion.div>
            {/* ÖPNV */}
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor:"#f0f5e0"}}>
                  <Train className="w-5 h-5" style={{color:"#758a2b"}} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-md mb-4">Öffentliche Verkehrsmittel</h3>
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7a7a7a] mb-2">Haltestelle Bahnhof Sürth</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="line-badge text-white font-bold" style={{backgroundColor:"#cc0000"}} aria-label="Linie 16">16</span>
                      <span className="line-badge text-white font-bold" style={{backgroundColor:"#758a2b"}} aria-label="Bus 130">130</span>
                      <span className="line-badge text-white font-bold" style={{backgroundColor:"#758a2b"}} aria-label="Bus 131">131</span>
                      <span className="line-badge text-white font-bold" style={{backgroundColor:"#758a2b"}} aria-label="Bus 134">134</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7a7a7a] mb-2">Haltestelle Michaelshoven</p>
                    <span className="line-badge text-white font-bold" style={{backgroundColor:"#cc0000"}} aria-label="Linie 16">16</span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Parking */}
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor:"#f0f5e0"}}>
                  <ParkingCircle className="w-5 h-5" style={{color:"#758a2b"}} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="heading-md mb-1">Parken</h3>
                  <p className="body-sm leading-relaxed">Eigene Parkplätze stehen leider nicht zur Verfügung. Wir empfehlen die Anreise mit den Öffis — Parkplätze können im umliegenden Industriegebiet gesucht werden.</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Map placeholder — DSGVO: OpenStreetMap link only, kein Embed */}
          <motion.a href={OSM} target="_blank" rel="noopener noreferrer" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.15}}
            className="group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed aspect-[4/3] lg:aspect-auto lg:min-h-[420px] transition-colors hover:border-[#758a2b]"
            style={{backgroundColor:"#f0f5e0",borderColor:"#c8d87a"}} aria-label="Karte auf OpenStreetMap öffnen"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor:"#758a2b"}}>
              <MapPin className="w-10 h-10 text-white" aria-hidden="true" />
            </div>
            <p className="text-xl font-bold" style={{color:"#2a3418"}}>An der Wachsfabrik 25</p>
            <p className="body-sm mt-1">Innenhof · 50996 Köln</p>
            <p className="text-sm font-semibold mt-5 group-hover:underline" style={{color:"#758a2b"}}>Auf OpenStreetMap öffnen →</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
