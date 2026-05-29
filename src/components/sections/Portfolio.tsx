"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "@/components/ui/Lightbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ─────────────────────────── data ─────────────────────────── */
const items = [
  { id: 1, url: "/showcase/P1.png", title: "Forest Sunset Vows",    category: "Wedding"     },
  { id: 2, url: "/showcase/P2.png", title: "The Unseen Tear",       category: "Candid"      },
  { id: 3, url: "/showcase/P3.png", title: "Elegance in Silk",      category: "Portrait"    },
  { id: 4, url: "/showcase/P4.png", title: "Moments",                category: "Wedding"     },
  { id: 5, url: "/showcase/P5.png", title: "The Royal Procession",  category: "Wedding"     },
  { id: 6, url: "/showcase/P6.png", title: "Minimalist Romance",    category: "Portrait"    },
  { id: 7, url: "/showcase/P7.png", title: "Golden Hour Laughs",    category: "Candid"      },
  { id: 8, url: "/showcase/P8.png", title: "Monsoon Romance",        category: "Pre-Wedding" },
  { id: 9,  url: "/showcase/P9.png",  title: "The Final Waltz",       category: "Wedding"     },
  { id: 10, url: "/showcase/P10.png", title: "A New Beginning",       category: "Wedding"     },
  { id: 11, url: "/showcase/P11.png", title: "Tender Moments",        category: "Candid"      },
  { id: 12, url: "/showcase/P12.png", title: "Golden Kasavu Grace",   category: "Portrait"    },
];

export default function Portfolio() {
  /* lightbox */
  const [lbOpen,  setLbOpen]  = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  /* pagination state */
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isMobile, setIsMobile] = useState(false);

  /* calculate total pages */
  const totalPages = Math.ceil(items.length / itemsPerPage);

  /* responsive items per page */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
        setIsMobile(false);
      } else {
        setItemsPerPage(4); // Desktop
        setIsMobile(false);
      }
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* auto-transition timer */
  useEffect(() => {
    if (lbOpen) return; // Pause timer only if lightbox is open

    // 3 seconds for mobile, 5 seconds for desktop
    const intervalTime = isMobile ? 3000 : 5000;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, intervalTime); 

    return () => clearInterval(timer);
  }, [totalPages, lbOpen, isMobile]);

  /* navigation handlers */
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const onCardClick = (i: number) => {
    // Calculate global index based on current page
    const globalIndex = currentPage * itemsPerPage + i;
    if (globalIndex < items.length) {
      setLbIndex(globalIndex);
      setLbOpen(true);
    }
  };

  // Get current items to display
  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Framer motion variants for smooth, cinematic transition
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 10 : -10,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1] as const, // soft smooth ease out
        staggerChildren: 0.15,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 10 : -10,
      filter: "blur(8px)",
      transition: {
        duration: 1.2,
        ease: [0.32, 0, 0.67, 0] as const, // soft smooth ease in
      },
    }),
  };

  const itemVariants = {
    enter: { opacity: 0, y: 30, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 1.0 } },
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden w-full select-none"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
            Curated Frames
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            The Portfolio Gallery
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide max-w-lg mt-4 leading-relaxed">
            A curated selection of our most cinematic wedding moments.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            aria-label="Previous page"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 px-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentPage ? 1 : -1);
                  setCurrentPage(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx 
                    ? "w-6 bg-accent" 
                    : "bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            aria-label="Next page"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid Stage */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative min-h-[440px] md:min-h-[480px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  variants={itemVariants}
                  className="relative group cursor-pointer h-[400px] md:h-[440px]"
                  onClick={() => onCardClick(i)}
                >
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-white/15 transition-colors duration-500">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    
                    {/* Bottom gradient */}
                    {(item.title || item.category) && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    )}
                    
                    {/* Glass top shine */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Caption */}
                    {(item.title || item.category) && (
                      <div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                        {item.category && (
                          <span className="text-accent uppercase tracking-widest text-[10px] font-bold block mb-2">
                            {item.category}
                          </span>
                        )}
                        {item.title && (
                          <h4 className="font-serif text-xl text-white leading-snug">{item.title}</h4>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={items}
        currentIndex={lbIndex}
        isOpen={lbOpen}
        onClose={() => setLbOpen(false)}
        onPrev={() => setLbIndex(p => (p === 0 ? items.length - 1 : p - 1))}
        onNext={() => setLbIndex(p => (p === items.length - 1 ? 0 : p + 1))}
      />
    </section>
  );
}
