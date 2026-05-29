"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Animate the text downwards and fade it out as the user scrolls down the page
  const textY = useTransform(scrollY, [0, 600], [0, 250]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textScale = useTransform(scrollY, [0, 600], [1, 0.9]);

  // Split into two distinct luxury typography layers
  const subtitleWords = "Capturing Timeless Stories".split(" ");

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVars = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section className="relative h-screen min-h-[500px] w-full overflow-hidden flex items-start sm:items-center justify-center pt-32 sm:pt-20 max-h-[720px]:pt-24 bg-black">
      {/* Background Image Container with Ken Burns Zoom */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="object-cover w-full h-full"
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dynamic Zooming Overlay Layer */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-transparent"
        />
      </motion.div>

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-black/70 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: textY, opacity: textOpacity }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 md:mb-10 max-h-[720px]:mb-3"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent font-semibold">
            Photopedia Weddings by{" "}
            <span className="whitespace-nowrap">Kiran Sanil</span>
          </p>
        </motion.div>

        {/* Animated Editorial Headline - Hybrid Typography */}
        <motion.h1
          variants={containerVars}
          initial="initial"
          animate="animate"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="flex flex-col items-center max-w-4xl mb-6 md:mb-8 max-h-[720px]:mb-4"
        >
          {/* Top Line: Small, Wide Sans-Serif */}
          <span className="block overflow-hidden mb-2 md:mb-5 max-h-[720px]:mb-2">
            <span className="flex flex-wrap justify-center font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-300 font-light">
              {subtitleWords.map((word, idx) => (
                <span key={`sub-${idx}`} className="inline-block overflow-hidden mr-3 pb-1 md:mr-4">
                  <motion.span variants={wordVars} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          
          {/* Bottom Line: Playfair Display */}
          <span className="block overflow-hidden pb-4 pt-3 px-4 w-full max-h-[720px]:pb-2 max-h-[720px]:pt-2">
            <span
              className="block text-center text-[1.9rem] min-[360px]:text-[2.2rem] min-[390px]:text-[2.4rem] sm:text-6xl sm:max-h-[720px]:text-5xl md:text-8xl md:max-h-[720px]:text-7xl lg:text-[7rem] lg:max-h-[720px]:text-[5rem] text-white leading-[0.85] tracking-tight"
              style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 900, fontStyle: "italic" }}
            >
              {/* Line 1: Through Every */}
              <span className="block mb-1 sm:mb-2 md:mb-3 max-h-[720px]:mb-1">
                <span className="inline-block overflow-hidden mr-1 pr-3 pb-4 pt-2 -my-2 md:-my-3 md:mr-3">
                  <motion.span variants={wordVars} className="inline-block">
                    <span className="text-accent">T</span>hrough
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden mr-1 pr-3 pb-4 pt-2 -my-2 md:-my-3 md:mr-3">
                  <motion.span variants={wordVars} className="inline-block">
                    Every
                  </motion.span>
                </span>
              </span>

              {/* Line 2: Frame. */}
              <span className="block">
                <span className="inline-block overflow-hidden mr-1 pr-3 pb-4 pt-2 -my-2 md:-my-3 md:mr-3">
                  <motion.span variants={wordVars} className="inline-block">
                    Frame.
                  </motion.span>
                </span>
              </span>
            </span>
          </span>
        </motion.h1>

        {/* Short Bio Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm md:text-base text-zinc-400 font-light tracking-wide max-w-lg leading-relaxed mb-8 md:mb-12 max-h-[720px]:mb-6"
        >
          Fine-art photography crafted for exclusive couples. Documenting authentic emotion, high-fashion candids, and timeless architectural love.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
        >
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-accent text-black font-semibold uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(176,252,56,0.6)] hover-target flex items-center gap-2"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>

      {/* Parallax Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-medium">Scroll to Discover</span>
        <div className="w-[1.5px] h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
