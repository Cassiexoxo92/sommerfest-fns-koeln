"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const PHOTOS = [
  {
    src: "/images/foto1.jpg",
    alt: "Sommerfest fns:Köln — Kinder beim Spielen im Freien",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/foto2.jpg",
    alt: "Natur erleben — Schülerinnen und Schüler der fns:Köln",
    span: "",
  },
  {
    src: "/images/foto3.jpg",
    alt: "Gemeinschaft bei der fns:Köln — gemeinsam lernen und wachsen",
    span: "",
  },
  {
    src: "/images/foto4.jpg",
    alt: "Freie Naturschule Köln — Grünes Klassenzimmer und Naturpädagogik",
    span: "md:col-span-2",
  },
  {
    src: "/images/foto5.jpg",
    alt: "fns:Köln Schulgelände — Insektenhotel und Naturbereich",
    span: "",
  },
] as const;

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);

  return (
    <section
      id="galerie"
      className="section-padding bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#61ce70] mb-3">
            Einblicke
          </p>
          <h2
            id="gallery-heading"
            className="text-4xl sm:text-5xl font-black text-[#54595f] mb-4"
          >
            Das sind wir.
          </h2>
          <p className="text-lg text-[#7a7a7a] max-w-xl mx-auto">
            Vier Jahre voller Momente — hier gebt ihr einen kleinen
            Vorgeschmack auf das, was euch beim Sommerfest erwartet.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]"
          role="list"
          aria-label="Fotogalerie"
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
              role="listitem"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(i);
              }}
              tabIndex={0}
              aria-label={`Bild vergrößern: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={PHOTOS[lightbox].alt}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-2 transition-colors"
              aria-label="Lightbox schließen"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                quality={90}
              />
            </motion.div>
            <p className="absolute bottom-6 text-white/60 text-sm text-center px-4">
              {PHOTOS[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
