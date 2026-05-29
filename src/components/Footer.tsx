"use client";

import React from "react";
import { ArrowUp, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Logo Brand */}
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold tracking-widest text-white block">
              PHOTOPEDIA
            </span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-zinc-500 block -mt-1">
              Weddings<span className="text-accent">.</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/photopedia__weddings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 hover-target"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:kkiran39989@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 hover-target"
              aria-label="Send Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="tel:7306913748"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 hover-target"
              aria-label="Call Phone"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-accent hover:text-black hover:bg-accent hover:shadow-[0_0_15px_rgba(176,252,56,0.4)] transition-all duration-300 hover-target"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom copyright info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-zinc-600 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} Photopedia Weddings. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-accent transition-colors">By, KIRAN SANIL</span>
            <span className="h-3 w-[1px] bg-zinc-800" />
            <span className="hover:text-accent transition-colors flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              KANNUR, KERALA
            </span>
            <span className="h-3 w-[1px] bg-zinc-800" />
            <span>Luxury Fine-Art Photography</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
