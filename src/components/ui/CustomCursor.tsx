"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  // True if the device has touch capability — cursor should be hidden
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    // Detect touch devices once on mount
    const hasTouchScreen =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    if (hasTouchScreen) {
      setIsTouchDevice(true);
      return; // Skip all mouse listeners on touch devices
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Hide cursor immediately if the user touches the screen
    // (handles hybrid devices like tablets with keyboards)
    const handleTouch = () => {
      setIsVisible(false);
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouch, { passive: true });

    // Dynamic hover targets
    const updateHoverTargets = () => {
      const targets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .hover-target, [data-hover]'
      );
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial binding
    updateHoverTargets();

    // Create a MutationObserver to bind to newly added elements dynamically
    const observer = new MutationObserver(updateHoverTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouch);
      observer.disconnect();
      const targets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .hover-target, [data-hover]'
      );
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY, isVisible]);

  // Never render on touch/mobile devices
  if (typeof window === "undefined" || isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10001] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_#B0FC38]"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 2.2 : isClicking ? 0.6 : 1,
          boxShadow: isHovered
            ? "0 0 15px #B0FC38, 0 0 30px #B0FC38"
            : "0 0 8px #B0FC38",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      />
    </>
  );
}
