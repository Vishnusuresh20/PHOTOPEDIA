"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Stories", href: "#stories" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-matte-black/80 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex flex-col font-serif tracking-widest hover-target"
          >
            <span className="text-lg md:text-xl font-bold text-white transition-colors group-hover:text-accent">
              PHOTOPEDIA
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 -mt-1 group-hover:text-white transition-colors">
              Weddings<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs xl:text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300 hover-target py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative px-4 py-2 xl:px-6 xl:py-2.5 text-xs uppercase tracking-widest border border-accent/40 text-white rounded-full bg-accent/5 overflow-hidden transition-all duration-300 hover:border-accent hover:text-black hover:bg-accent hover:shadow-[0_0_15px_rgba(176,252,56,0.4)] hover-target block font-semibold"
            >
              Book A Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent p-2 hover-target"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel (Nested inside nav so top-full positions it perfectly below navbar) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-30 lg:hidden bg-matte-black/95 backdrop-blur-lg border-b border-accent/15 px-8 py-10 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg tracking-widest uppercase text-zinc-300 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-center py-3 text-sm uppercase tracking-widest bg-accent text-black font-bold rounded-full shadow-[0_0_15px_rgba(176,252,56,0.3)] hover:shadow-[0_0_25px_rgba(176,252,56,0.5)]"
              >
                Book A Session
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
