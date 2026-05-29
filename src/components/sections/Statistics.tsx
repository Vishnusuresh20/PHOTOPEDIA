"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-7xl font-bold text-accent glow-accent">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    target: 9,
    suffix: "+",
    label: "Years Experience",
    description: "Perfecting the art of wedding photography.",
  },
  {
    target: 350,
    suffix: "+",
    label: "Happy Couples",
    description: "Trusting us with their most valuable milestones.",
  },
  {
    target: 25000,
    suffix: "+",
    label: "Memories Captured",
    description: "Every single frame graded to perfection.",
  },
];

export default function Statistics() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel p-8 md:p-12 rounded-3xl text-center border border-white/5 relative overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Count Up */}
              <div className="block mb-3">
                <Counter value={stat.target} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-white text-lg font-medium tracking-wide mb-2 uppercase text-xs tracking-widest text-zinc-300">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-[240px] mx-auto">
                {stat.description}
              </p>

              {/* Glow Accent Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-accent/0 group-hover:bg-accent/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
