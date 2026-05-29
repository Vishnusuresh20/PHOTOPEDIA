"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Kiran and his team did an absolute dream job. They didn't just capture our wedding; they made it look like a luxury VOGUE magazine editorial spreads. The candid photos still bring us to tears every single time we review them.",
    couple: "Kabir & Zara",
    location: "Kumarakom, Kerala",
    stars: 5,
  },
  {
    quote: "From the Bekal pre-wedding shoots to the multi-day wedding celebration, Kiran was a calming force of creative genius. The Canon EOS R5 clarity and matte black colors are surreal. Absolutely Awwwards-worthy!",
    couple: "Mishal & Nazrin",
    location: "Bekal, Kerala",
    stars: 5,
  },
  {
    quote: "We hate standard stiff wedding poses, but Kiran made us feel incredibly natural. The final photos are fine-art masterpieces that look spectacular printed and framed in our new home. A truly elite service.",
    couple: "Neil & Kiara",
    location: "Varkala, Kerala",
    stars: 5,
  },
  {
    quote: "Kiran captured the moody, mist-laden landscape of our Munnar wedding perfectly. Every image feels cinematic, poetic, and deeply emotional. We couldn't have asked for a better storyteller.",
    couple: "Zubin & Sarah",
    location: "Munnar, Kerala",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[-10%] bottom-0 w-[30vw] h-[30vw] rounded-full bg-accent/2 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Kind Words</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            Couple Testimonials
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="glass-panel p-8 md:p-16 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/5 flex flex-col items-center text-center">
          {/* Quote Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/5 border border-accent/20 text-accent mb-8 shadow-[0_0_15px_rgba(176,252,56,0.1)]">
            <Quote className="h-6 w-6 fill-accent/10" />
          </div>

          {/* Testimonial slider content */}
          <div className="min-h-[220px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-white text-lg md:text-2xl font-serif leading-relaxed italic max-w-3xl">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Rating stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent shadow-[0_0_5px_#B0FC38]" />
                  ))}
                </div>

                {/* Couple details */}
                <div>
                  <h4 className="text-white font-medium text-base tracking-wide">
                    {testimonials[currentIndex].couple}
                  </h4>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest mt-0.5 block font-semibold">
                    {testimonials[currentIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(176,252,56,0.3)] transition-all duration-300 hover-target"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Pagination indicators */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "w-6 bg-accent" : "w-2 bg-zinc-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(176,252,56,0.3)] transition-all duration-300 hover-target"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
