"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Editorial Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-white/5"
            >
              <Image
                src="/image.png"
                alt="Kiran Sanil photography showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-40" />
              {/* Highlight badge */}
              <div className="absolute bottom-6 left-6 glass-panel-glow px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-accent font-semibold">
                Est. 2017
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4"
            >
              The Vision
            </motion.div>

            {/* Editorial Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-8 leading-tight"
            >
              Crafting Luxury Visual Legacies for Extraordinary Couples
            </motion.h2>

            {/* Details */}
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-base md:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I am <strong className="text-white font-medium">Kiran Sanil</strong>, the eyes and soul behind Photopedia Weddings. Over the last nine years, my team and I have photographed weddings across the globe, focusing not on standard rigid poses, but on the true emotional currents that bind two lives.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our aesthetic resides at the intersection of raw, documentary candid storytelling and high-fashion editorial styling. Every shadow, every flash of light, and every tear is captured with deep intent, creating a visual heirloom that feels as luxury and breathtaking decades later.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-accent/90 italic font-serif"
              >
                &ldquo;We do not just snap frames. We freeze the exact atmosphere, the silent glances, and the cinematic architecture of your love.&rdquo;
              </motion.p>
            </div>

            {/* Quick Details Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/5"
            >
              <div>
                <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-1 font-semibold">Specialization</h4>
                <p className="text-white text-sm font-medium">Candid & High-Fashion Wedding Journalism</p>
              </div>
              <div>
                <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-1 font-semibold">Based In</h4>
                <p className="text-white text-sm font-medium">India (Across Kerala & Beyond)</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
