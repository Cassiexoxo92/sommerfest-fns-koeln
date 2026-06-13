"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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

  // Scroll-linked parallax: background drifts slower than scroll (depth),
  // content gently ascends + fades. Disabled for reduced-motion users.
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgYRaw           = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const contentYRaw      = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacityRaw = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const bgY            = reduce ? "0%" : bgYRaw;
  const bgScale        = reduce ? 1 : 1.22;
  const contentY       = reduce ? "0%" : contentYRaw;
  const contentOpacity = reduce ? 1 : contentOpacityRaw;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-dvh min-h-[680px] overflow-hidden"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label="fns:köln Sommerfest 2026"
    >
      {/* Parallax media layer — image + hover video drift together, slower than scroll */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <Image src="/images/foto2.jpg" alt="" fill priority quality={85}
          className="object-cover object-center" sizes="100vw" aria-hidden="true" />

        <video ref={videoRef}
          className="video-overlay absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: hovered && videoReady ? 1 : 0 }}
          src="/video/hover-reel.mp4" muted loop playsInline preload="metadata"
          onCanPlay={() => setVideoReady(true)} aria-hidden="true" />
      </motion.div>

      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >

        {/* Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
        >
          <Leaf className="w-4 h-4 text-[#9aad3b] flex-shrink-0" aria-hidden="true" />
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            4 Jahre fns:köln · Natur · Mensch · Umwelt
          </span>
          <Leaf className="w-4 h-4 text-[#9aad3b] flex-shrink-0" aria-hidden="true" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-white leading-none tracking-tighter mb-6 drop-shadow-lg"
          style={{ fontSize: "clamp(3.25rem, 15vw, 12rem)", maxWidth: "100%" }}
        >
          Sommer<span style={{ color: "#9aad3b" }}>fest</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-white/85 mb-14"
          style={{ maxWidth: "36rem" }}
        >
          Kommt zahlreich vorbei und{" "}
          <strong className="font-bold text-white">feiert mit uns!</strong>
        </motion.p>

        {/* Info pills — bigger, more prominent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex items-center gap-3 rounded-2xl px-7 py-4"
            style={{ backgroundColor: "#758a2b", boxShadow: "0 4px 20px rgba(117,138,43,0.5)" }}>
            <CalendarDays className="w-6 h-6 text-white/85 flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider leading-none mb-1">Datum</p>
              <p className="text-white font-bold text-base leading-none whitespace-nowrap">Freitag, 10. Juli 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-7 py-4 border border-white/25">
            <Clock className="w-6 h-6 text-white/85 flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider leading-none mb-1">Uhrzeit</p>
              <p className="text-white font-bold text-base leading-none whitespace-nowrap">15:00 – 18:00 Uhr</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-7 py-4 border border-white/25">
            <MapPin className="w-6 h-6 text-white/85 flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider leading-none mb-1">Ort</p>
              <p className="text-white font-bold text-base leading-none whitespace-nowrap">Wachsfabrik · Köln</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        onClick={() => document.querySelector("#event-strip")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float text-white/60 hover:text-white transition-colors"
        aria-label="Weiter scrollen"
      >
        <ChevronDown className="w-9 h-9" />
      </motion.button>
    </section>
  );
}
