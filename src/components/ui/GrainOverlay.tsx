import React from "react";

export default function GrainOverlay() {
  return (
    <div 
      className="noise-overlay pointer-events-none fixed inset-0 z-[9999]" 
      aria-hidden="true" 
    />
  );
}
