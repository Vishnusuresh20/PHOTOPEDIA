"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const feedImages = [
  {
    id: 1,
    url: "/showcase/SHOW1.png",
    alt: "Instagram Showcase 1",
  },
  {
    id: 2,
    url: "/showcase/SHOW2.png",
    alt: "Instagram Showcase 2",
  },
  {
    id: 3,
    url: "/showcase/SHOW3.png",
    alt: "Instagram Showcase 3",
  },
  {
    id: 4,
    url: "/showcase/SHOW4.png",
    alt: "Instagram Showcase 4",
  },
];

export default function InstagramShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Social Journal</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
              Instagram Showcase
            </h2>
          </div>
          
          <a
            href="https://instagram.com/photopedia__weddings"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-400 hover:text-accent font-semibold tracking-widest uppercase transition-colors hover-target group"
          >
            <Instagram className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
            @photopedia__weddings
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {feedImages.map((img, index) => (
            <motion.a
              key={img.id}
              href="https://instagram.com/photopedia__weddings"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-white/5 block hover-target"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Accent neon highlight frame */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
