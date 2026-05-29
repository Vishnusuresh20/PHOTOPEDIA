"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    name: "The Editorial Edition",
    tagline: "Pre-Wedding & Portraits",
    price: "₹85,000+",
    duration: "Single Day Session",
    features: [
      "8 hours of creative photography direction",
      "High-fashion couple portraits",
      "Signature matte black color grading",
      "65 master retouched high-res digital frames",
      "Online private gallery showcase (1 year)",
      "Location scouts & mood board curation",
    ],
    popular: false,
  },
  {
    name: "The Signature Wedding",
    tagline: "Complete Celebrations",
    price: "₹2,50,000+",
    duration: "Full Main Event Coverage",
    features: [
      "Up to 12 hours of active event coverage",
      "Double camera angles (featuring Canon R5)",
      "Fine-art photo journalism & raw candids",
      "250+ print-ready master files",
      "1 premium leather-bound photo book",
      "Online private digital archive",
    ],
    popular: true,
  },
  {
    name: "The Destination Elite",
    tagline: "Worldwide Legacies",
    price: "₹5,50,000+",
    duration: "Multi-Day Destinations",
    features: [
      "Up to 3 days of multi-event coverage",
      "Unlimited candidate frames captured",
      "Pre-wedding shoot included (worldwide locations)",
      "400+ final curated retouched digital files",
      "2 grand leather-bound layflat wedding albums",
      "Priority post-production delivery (3 weeks)",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Investment Options</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            Premium Services & Packages
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide max-w-md mx-auto mt-4 leading-relaxed">
            Transparent packages tailored to preserve your luxury visual legacy. Custom scopes available upon consultation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover-target relative ${
                service.popular
                  ? "glass-panel-glow border-accent/40 shadow-[0_20px_50px_rgba(176,252,56,0.08)] z-10"
                  : "glass-panel shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black font-semibold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(176,252,56,0.4)]">
                  Most Requested
                </div>
              )}

              <div>
                {/* Title */}
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">
                  {service.tagline}
                </span>
                <h3 className="text-2xl font-serif text-white mb-6">
                  {service.name}
                </h3>

                {/* Price */}
                <div className="border-b border-white/5 pb-8 mb-8">
                  <span className="text-4xl md:text-5xl font-serif text-white font-bold tracking-tight">
                    {service.price}
                  </span>
                  <span className="text-zinc-500 text-xs tracking-wider block mt-1.5 font-medium">
                    {service.duration}
                  </span>
                </div>

                {/* Checklist */}
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-400 font-light text-sm leading-relaxed">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-accent mt-0.5 shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className={`w-full py-3.5 text-center text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${
                  service.popular
                    ? "bg-accent text-black hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    : "bg-zinc-900 border border-white/10 text-white hover:border-accent hover:text-black hover:bg-accent hover:shadow-[0_0_15px_rgba(176,252,56,0.3)]"
                }`}
              >
                Inquire Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
