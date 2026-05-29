"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Layers, Award, Calendar } from "lucide-react";

const timelines = [
  {
    year: "2017",
    title: "The Genesis",
    description: "Founded Photopedia Weddings. Started capturing local intimate love stories with an artistic edge.",
  },
  {
    year: "2019",
    title: "Destination Experiences",
    description: "Creating unforgettable wedding celebrations at breathtaking destinations across India and select luxury locations.",
  },
  {
    year: "2021",
    title: "Editorial Feature",
    description: "Honored with features in luxury bridal magazines, showcasing our signature high-fashion candids.",
  },
  {
    year: "2024 - Present",
    title: "Awwwards & Luxury Focus",
    description: "Catering exclusively to high-profile couples, delivering fine-art visual legacies with world-class production.",
  },
];

const gearItems = [
  {
    icon: Camera,
    category: "Main Body",
    name: "Canon EOS R5",
    spec: "45MP full-frame sensor, 8K RAW video capture, hyper-accurate eye-tracking autofocus.",
  },
  {
    icon: Layers,
    category: "Signature Glass",
    name: "Canon RF Prime Lenses",
    spec: "RF 50mm f/1.2L, RF 85mm f/1.2L & RF 28-70mm f/2L for breathtaking bokeh and low-light depth.",
  },
  {
    icon: Award,
    category: "Workflow & Color",
    name: "Lightroom & Photoshop",
    spec: "Advanced custom LUTs, color grading, and non-destructive fine-art master retouches.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">The Timeline & Arsenal</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            9+ Years of Perfecting the Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h3 className="text-zinc-300 text-lg uppercase tracking-widest font-semibold mb-8 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-accent" /> Milestones
            </h3>
            
            <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
              {timelines.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-matte-black border-2 border-accent transition-all duration-300 group-hover:bg-accent group-hover:scale-125 group-hover:shadow-[0_0_10px_#B0FC38]" />
                  
                  <span className="text-accent font-serif text-2xl font-semibold tracking-wide block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-white text-lg font-medium tracking-wide mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Gear Arsenal */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="text-zinc-300 text-lg uppercase tracking-widest font-semibold mb-8 flex items-center gap-3">
              <Camera className="h-5 w-5 text-accent" /> The Arsenal
            </h3>

            <div className="space-y-6">
              {gearItems.map((gear, index) => {
                const Icon = gear.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="glass-panel hover:border-accent/40 p-6 rounded-xl transition-all duration-300 group hover:shadow-[0_0_20px_rgba(176,252,56,0.05)] hover-target"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                        <Icon className="h-6 w-6 text-zinc-400 group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                          {gear.category}
                        </span>
                        <h4 className="text-white text-base font-semibold mt-0.5 group-hover:text-accent transition-colors">
                          {gear.name}
                        </h4>
                        <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed mt-2">
                          {gear.spec}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
