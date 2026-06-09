"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/*
 * VIDEO HOVER EFFECT
 * ---------------------------------------------------------
 * The video plays automatically on hover (desktop) or on
 * scroll into view (mobile). The video file must be placed at:
 *
 *   public/video/hover-reel.mp4
 *
 * To download the Instagram Reel (DSGVO-compliant self-hosting):
 *   1. Install yt-dlp: pip install yt-dlp
 *   2. Run: yt-dlp "https://www.instagram.com/reels/DL986DdtNV7/" \
 *              --merge-output-format mp4 \
 *              -o "public/video/hover-reel.mp4"
 *
 * Without the video file, the hero shows the background photo.
 * ---------------------------------------------------------
 */

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const playVideo = useCallback(async () => {
    if (!videoRef.current || !videoReady) return;
    try {
      await videoRef.current.play();
    } catch {
      // Autoplay blocked — video stays hidden
    }
  }, [videoReady]);

  const pauseVideo = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    setIsHovered(true);
    playVideo();
  }, [isMobile, playVideo]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    setIsHovered(false);
    pauseVideo();
  }, [isMobile, pauseVideo]);

  // Mobile: play video when section is in view
  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHovered(true);
          playVideo();
        } else {
          setIsHovered(false);
          pauseVideo();
        }
      },
      { threshold: 0.4 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [isMobile, playVideo, pauseVideo]);

  const scrollDown = () => {
    const next = document.querySelector("#event-info");
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-dvh min-h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Sommerfest fns:Köln 2026 — Willkommen"
    >
      {/* Background photo */}
      <Image
        src="/images/foto1.jpg"
        alt="Kinder und Natur — fns:Köln Schulleben"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Self-hosted hover video — DSGVO compliant (no external requests) */}
      <video
        ref={videoRef}
        className="video-overlay absolute inset-0 w-full h-full object-cover"
        style={{ opacity: isHovered && videoReady ? 1 : 0 }}
        src="/video/hover-reel.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Anniversary badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-semibold"
        >
          <span className="text-[#f5c842]" aria-hidden="true">✦</span>
          4 Jahre fns:Köln — ein Fest für uns alle
          <span className="text-[#f5c842]" aria-hidden="true">✦</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4"
        >
          Sommer
          <br />
          <span className="text-[#6ec1e4]">fest</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-2xl font-light text-white/90 mb-10 max-w-xl"
        >
          Kommt zahlreich vorbei und{" "}
          <span className="font-semibold text-white">feiert mit uns!</span>
        </motion.p>

        {/* Date / time pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-14"
        >
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3">
            <span className="text-[#f5c842] text-xl" aria-hidden="true">📅</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">Datum</p>
              <p className="font-bold text-base">Freitag, 10. Juli 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3">
            <span className="text-[#61ce70] text-xl" aria-hidden="true">🕒</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">Uhrzeit</p>
              <p className="font-bold text-base">15:00 – 18:00 Uhr</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3">
            <span className="text-[#f5c842] text-xl" aria-hidden="true">📍</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">Ort</p>
              <p className="font-bold text-base">Wachsfabrik · Köln</p>
            </div>
          </div>
        </motion.div>

        {/* Hover hint */}
        {!isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-24 text-xs text-white/50 tracking-widest uppercase"
            aria-hidden="true"
          >
            Hover für eine Überraschung
          </motion.p>
        )}

        {/* Scroll down arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollDown}
          className="absolute bottom-8 animate-float text-white/70 hover:text-white transition-colors"
          aria-label="Nach unten scrollen"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
}
