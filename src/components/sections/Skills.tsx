"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Aperture, Users, Sparkles, Sliders, Play } from "lucide-react";

const skills = [
  {
    name: "Wedding Photography",
    description: "Capturing the grandeur, ceremonies, and micro-expressions with an editorial and fine-art perspective.",
    icon: Heart,
    level: "100%",
  },
  {
    name: "Candid Storytelling",
    description: "Invisible documentation of authentic emotion, laughter, and tears without directing the moment.",
    icon: Sparkles,
    level: "98%",
  },
  {
    name: "Pre-Wedding Shoots",
    description: "Cinematic, high-fashion storytelling set in architectural backdrops or epic natural landscapes.",
    icon: Aperture,
    level: "95%",
  },
  {
    name: "Couple Portraits",
    description: "editorial magazine-worthy portraits using professional lighting, flattering angles, and emotional connection.",
    icon: Users,
    level: "96%",
  },
  {
    name: "Event Journalism",
    description: "Capturing the fast-paced energy, guest experiences, and ambient vibe of high-profile wedding events.",
    icon: Play,
    level: "92%",
  },
  {
    name: "Color Grading & LUTs",
    description: "Premium signature matte-black color styles and high-fashion editorial colors created in Lightroom.",
    icon: Sliders,
    level: "97%",
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute right-[-10%] top-[20%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[30vw] h-[30vw] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Specialized Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            Core Photography Skillset
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide max-w-md mx-auto mt-4 leading-relaxed">
            A fusion of technical mastery, lighting precision, and creative visual vision.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel hover:border-accent/40 p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover-target"
              >
                {/* Accent glow on top left corner on hover */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Skill Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent text-zinc-400 mb-6 transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Level indicators */}
                <div className="absolute top-8 right-8 text-xs font-mono text-zinc-600 group-hover:text-accent font-semibold transition-colors duration-300">
                  {skill.level}
                </div>

                {/* Skill details */}
                <h3 className="text-white text-xl font-medium tracking-wide mb-3 group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
