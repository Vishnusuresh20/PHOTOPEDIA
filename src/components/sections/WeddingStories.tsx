"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const stories = [
  {
    id: 1,
    couple: "Kabir & Zara",
    location: "Kumarakom, Kerala",
    tagline: "Backwater Serenade",
    description: "Serene houseboat processions, sunset over the Vembanad Lake, and editorial portraits framed by towering coconut palms.",
    url: "/stories/stry1.png",
    date: "June 2025",
  },
  {
    id: 2,
    couple: "Mishal & Nazrin",
    location: "Bekal, Kerala",
    tagline: "Coastal Fortress Romance",
    description: "A majestic cliffside ceremony overlooking the Arabian Sea, framed by ancient stone walls, crashing waves, and a golden sunset.",
    url: "/stories/stry2.png",
    date: "November 2025",
  },
  {
    id: 3,
    couple: "Neil & Kiara",
    location: "Varkala, Kerala",
    tagline: "Cliffside Ocean Vows",
    description: "Pristine sandy shores beneath towering red clay cliffs, warm Arabian Sea breeze, and intimate vows under a canopy of coconut palms at twilight.",
    url: "/stories/stry3.png",
    date: "January 2026",
  },
  {
    id: 4,
    couple: "Zubin & Sarah",
    location: "Munnar, Kerala",
    tagline: "Misty Mountain Sanctuary",
    description: "A magical tea-garden forest ceremony surrounded by deep emerald hills, dense fog, and glowing fireflies.",
    url: "/stories/stry4.png",
    date: "April 2026",
  },
];

export default function WeddingStories() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll inside the component container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress to horizontal translation (from 0% to -75% since we have 4 stories)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div id="stories" ref={targetRef} className="relative h-[300vh] bg-[#050505] border-t border-white/5">
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* Section title header */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 pb-4 relative z-20">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Narrative Journals</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            Featured Wedding Stories
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light mt-2">
            [Scroll down to slide horizontally]
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="relative flex-1 flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[400vw]">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="w-[90vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-4 md:gap-6"
              >
                {/* Image Card */}
                <div className="relative h-[55vh] rounded-3xl overflow-hidden group border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover-target">
                  {/* Image */}
                  <Image
                    src={story.url}
                    alt={`${story.couple} Wedding`}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Accent neon highlight frame */}
                  <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 rounded-3xl transition-all duration-500 pointer-events-none" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col z-10">
                    {/* Top: Location & Date */}
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-accent font-semibold bg-black/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-white/5">
                        {story.location}
                      </span>
                      <span className="text-[10px] md:text-xs text-zinc-400 font-mono">
                        {story.date}
                      </span>
                    </div>

                    {/* Bottom: Tagline & Description */}
                    <div className="mt-auto text-left w-full">
                      <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent font-bold mb-2 block">
                        {story.tagline}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-serif text-white mb-2 md:mb-4">
                        {story.couple}
                      </h3>
                      <p className="text-zinc-300 font-light text-xs md:text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden md:block md:h-[84px]">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
