"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock, CalendarDays, Leaf } from "lucide-react";

export function Hero() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered,    setHovered]    = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const play  = useCallback(async () => {
    if (!videoRef.current || !videoReady) return;
    try { await videoRef.current.play(); } catch {}
  }, [videoReady]);

  const pause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, []);

  const onEnter = useCallback(() => { if (!isMobile) { setHovered(true);  play();  } }, [isMobile, play]);
  const onLeave = useCallback(() => { if (!isMobile) { setHovered(false); pause(); } }, [isMobile, pause]);

  useEffect(() => {
    if (!isMobile) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHovered(true); play(); }
      else                   { setHovered(false); pause(); }
    }, { threshold: 0.5 });
    const el = sectionRef.current;
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, [isMobile, play, pause]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-dvh min-h-[640px] overflow-hidden"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label="fns:köln Sommerfest 2026 — Willkommen"
    >
      {/* Background photo */}
      <Image
        src="/images/foto2.jpg"
        alt=""
        fill priority quality={85}
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Hover video (self-hosted, DSGVO-konform) */}
      <video
        ref={videoRef}
        className="video-overlay absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: hovered && videoReady ? 1 : 0 }}
        src="/video/hover-reel.mp4"
        muted loop playsInline preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Anniversary ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-7"
        >
          <Leaf className="w-4 h-4 text-[#9aad3b]" aria-hidden="true" />
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            4 Jahre fns:köln · Natur · Mensch · Umwelt
          </span>
          <Leaf className="w-4 h-4 text-[#9aad3b]" aria-hidden="true" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4.5rem,15vw,11rem)] font-black text-white leading-none tracking-tighter mb-5 drop-shadow-lg"
        >
          Sommer<span style={{ color: "#9aad3b" }}>fest</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-white/85 max-w-xl mb-12"
        >
          Kommt zahlreich vorbei und{" "}
          <strong className="font-bold text-white">feiert mit uns!</strong>
        </motion.p>

        {/* Date / time / location pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <div className="flex items-center gap-2.5 rounded-full px-5 py-3" style={{ backgroundColor: "#758a2b" }}>
            <CalendarDays className="w-5 h-5 text-white/80 flex-shrink-0" aria-hidden="true" />
            <span className="text-white font-bold text-base whitespace-nowrap">Freitag, 10. Juli 2026</span>
          </div>

          <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 border border-white/25">
            <Clock className="w-5 h-5 text-white/80 flex-shrink-0" aria-hidden="true" />
            <span className="text-white font-semibold text-base whitespace-nowrap">15:00 – 18:00 Uhr</span>
          </div>

          <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 border border-white/25">
            <MapPin className="w-5 h-5 text-white/80 flex-shrink-0" aria-hidden="true" />
            <span className="text-white font-semibold text-base whitespace-nowrap">Wachsfabrik · Köln</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        onClick={() => document.querySelector("#event-strip")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float text-white/60 hover:text-white transition-colors"
        aria-label="Weiter scrollen"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
