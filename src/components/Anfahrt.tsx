"use client";

import { motion } from "framer-motion";
import { MapPin, Train, Bus, ParkingCircle, Navigation2 } from "lucide-react";

/*
 * KARTE: Wir verwenden KEINE Google Maps (DSGVO).
 * Stattdessen: Link zu OpenStreetMap (keine Cookies, keine Tracker).
 */

const OSM_URL =
  "https://www.openstreetmap.org/search?query=An%20der%20Wachsfabrik%2025%2C%2050996%20K%C3%B6ln#map=17/50.8856/6.9560";

export function Anfahrt() {
  return (
    <section
      id="anfahrt"
      className="section-padding bg-[#f9f8f4]"
      aria-labelledby="anfahrt-heading"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-[#758a2b] mb-3">
            Wir freuen uns auf euch
          </p>
          <h2
            id="anfahrt-heading"
            className="text-4xl sm:text-5xl font-black text-[#54595f] mb-4"
          >
            So findet ihr uns.
          </h2>
          <p className="text-lg text-[#7a7a7a] max-w-xl mx-auto">
            Das Sommerfest findet im Innenhof der Wachsfabrik in
            Köln-Rodenkirchen statt — mitten im Grünen, gut erreichbar mit
            Bahn und Bus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6ec1e420] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#6ec1e4]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#54595f] mb-1">Adresse</h3>
                  <address className="not-italic text-sm text-[#7a7a7a] leading-relaxed">
                    An der Wachsfabrik 25 (Innenhof)
                    <br />
                    50996 Köln
                  </address>
                  <a
                    href={OSM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#6ec1e4] hover:underline"
                    aria-label="Auf OpenStreetMap anzeigen (öffnet in neuem Tab)"
                  >
                    <Navigation2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Auf OpenStreetMap anzeigen
                  </a>
                </div>
              </div>
            </div>

            {/* ÖPNV — Sürth */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#61ce7020] flex items-center justify-center flex-shrink-0">
                  <Train className="w-5 h-5 text-[#61ce70]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#54595f] mb-3">
                    Öffentliche Verkehrsmittel
                  </h3>

                  {/* Stop 1 */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7a7a7a] mb-2">
                      Haltestelle Bahnhof Sürth
                    </p>
                    <div
                      className="flex flex-wrap gap-2"
                      aria-label="Linien: Straßenbahn 16, Bus 130, 131, 134"
                    >
                      <span className="line-badge bg-[#cc0000] text-white" aria-label="Straßenbahn Linie 16">
                        16
                      </span>
                      <span className="line-badge bg-[#758a2b] text-white" aria-label="Bus 130">
                        130
                      </span>
                      <span className="line-badge bg-[#758a2b] text-white" aria-label="Bus 131">
                        131
                      </span>
                      <span className="line-badge bg-[#758a2b] text-white" aria-label="Bus 134">
                        134
                      </span>
                    </div>
                  </div>

                  {/* Stop 2 */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7a7a7a] mb-2">
                      Haltestelle Michaelshoven
                    </p>
                    <div
                      className="flex gap-2"
                      aria-label="Linie: Straßenbahn 16"
                    >
                      <span className="line-badge bg-[#cc0000] text-white" aria-label="Straßenbahn Linie 16">
                        16
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bus note */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f5c84220] flex items-center justify-center flex-shrink-0">
                  <Bus className="w-5 h-5 text-[#f5c842]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#54595f] mb-1">Fahrtinfo</h3>
                  <p className="text-sm text-[#7a7a7a] leading-relaxed">
                    Aktuelle Abfahrtszeiten und Verbindungen findet ihr auf{" "}
                    <a
                      href="https://www.kvb.koeln/service/fahrplanauskunft/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6ec1e4] font-medium hover:underline"
                      aria-label="KVB Fahrplanauskunft (öffnet in neuem Tab)"
                    >
                      kvb.koeln
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#758a2b20] flex items-center justify-center flex-shrink-0">
                  <ParkingCircle className="w-5 h-5 text-[#758a2b]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#54595f] mb-1">Parken</h3>
                  <p className="text-sm text-[#7a7a7a] leading-relaxed">
                    Eigene Parkplätze stehen leider nicht zur Verfügung. Wir
                    empfehlen die Anreise mit den Öffis — Parkplätze können im
                    umliegenden Industriegebiet gesucht werden.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map preview (DSGVO: OpenStreetMap static image via link, no embed) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <a
              href={OSM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Karte auf OpenStreetMap öffnen (öffnet in neuem Tab)"
            >
              <div className="relative bg-[#e8f4fd] rounded-3xl overflow-hidden border border-[#6ec1e4]/30 shadow-sm aspect-[4/3] flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300">
                {/* Decorative map illustration */}
                <div className="text-center px-8">
                  <div
                    className="w-16 h-16 rounded-full bg-[#6ec1e4] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-bold text-[#54595f] mb-1">
                    An der Wachsfabrik 25
                  </p>
                  <p className="text-sm text-[#7a7a7a] mb-1">
                    Innenhof · 50996 Köln
                  </p>
                  <p className="text-xs text-[#6ec1e4] font-semibold mt-4 group-hover:underline">
                    Auf OpenStreetMap anzeigen →
                  </p>
                </div>

                {/* Decorative circles */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#61ce70]/10"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#6ec1e4]/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#758a2b]/08"
                  aria-hidden="true"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
