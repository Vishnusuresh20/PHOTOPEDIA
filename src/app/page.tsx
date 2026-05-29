"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import WeddingStories from "@/components/sections/WeddingStories";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import InstagramShowcase from "@/components/sections/InstagramShowcase";
import Statistics from "@/components/sections/Statistics";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loader duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-matte-black text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          /* Cinematic Preloader screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center select-none">
              <motion.span
                initial={{ letterSpacing: "0.1em", opacity: 0 }}
                animate={{ letterSpacing: "0.3em", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-serif text-2xl md:text-3xl font-bold tracking-[0.3em] text-white"
              >
                PHOTOPEDIA
              </motion.span>
              <motion.span
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.55em", opacity: 0.6 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="text-[10px] uppercase tracking-[0.55em] text-zinc-400 mt-2"
              >
                Weddings<span className="text-accent font-bold">.</span>
              </motion.span>
            </div>
            
            {/* Visual indicator loader line */}
            <div className="w-24 h-[1px] bg-zinc-800 mt-8 relative overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/2 h-full bg-accent absolute"
              />
            </div>
          </motion.div>
        ) : (
          /* Main application sections */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <WeddingStories />
            <Services />
            <Testimonials />
            <InstagramShowcase />
            <Statistics />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
