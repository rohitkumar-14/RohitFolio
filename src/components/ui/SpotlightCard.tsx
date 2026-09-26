"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative rounded-2xl overflow-hidden bg-[var(--color-card)] ${className}`}
    >
      {/* Animated glowing border */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, var(--color-primary), transparent 40%)`,
        }}
      />
      
      {/* Inner background mask */}
      <div className="absolute inset-[1px] bg-[var(--color-card)] rounded-[15px] z-0" />
      
      {/* Inner spotlight for content */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-0 mix-blend-overlay"
        style={{
          opacity: opacity * 0.15,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, #ffffff, transparent 40%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
