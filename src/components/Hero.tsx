"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";

export function Hero() {
  const videoRef  = useRef<HTMLVideoElement>(null);
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

  /* Mobile: IntersectionObserver */
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
      className="relative w-full h-dvh min-h-[620px] overflow-hidden"
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
      {/* → public/video/hover-reel.mp4 ablegen (siehe public/video/README.md) */}
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
      <div className="relative z-10 h-full flex flex-col">

        {/* Top: logo centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center pt-24 md:pt-28"
        >
          <Image
            src="/images/logo.png"
            alt="fns:köln — Freie Naturschulen Köln"
            width={180}
            height={62}
            className="h-14 w-auto object-contain brightness-0 invert drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Center: headline */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-8">
          {/* Anniversary ribbon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-sm">🌿</span>
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              4 Jahre fns:köln — Natur · Mensch · Umwelt
            </span>
            <span className="text-sm">🌿</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(4rem,14vw,10rem)] font-black text-white leading-none tracking-tighter mb-3 drop-shadow-md"
          >
            Sommer<span style={{ color: "#9aad3b" }}>fest</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-xl sm:text-2xl font-light text-white/85 max-w-lg"
          >
            Kommt zahlreich vorbei und{" "}
            <strong className="font-semibold text-white">feiert mit uns!</strong>
          </motion.p>
        </div>

        {/* Bottom: date/time/location bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4"
        >
          {/* Date pill */}
          <div className="flex items-center gap-2.5 bg-[#758a2b] rounded-full px-5 py-2.5">
            <span className="text-lg" aria-hidden="true">📅</span>
            <span className="text-white font-bold text-sm">
              Freitag, 10. Juli 2026
            </span>
          </div>

          <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
            <Clock className="w-4 h-4 text-white/80" aria-hidden="true" />
            <span className="text-white font-semibold text-sm">15:00 – 18:00 Uhr</span>
          </div>

          <div className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
            <MapPin className="w-4 h-4 text-white/80" aria-hidden="true" />
            <span className="text-white font-semibold text-sm">Wachsfabrik · Köln</span>
          </div>
        </motion.div>

        {/* Scroll arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={() => document.querySelector("#event-strip")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-float text-white/60 hover:text-white transition-colors"
          aria-label="Weiter scrollen"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </div>
    </section>
  );
}
