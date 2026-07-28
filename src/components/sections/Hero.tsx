"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Sparkles } from "lucide-react";
import HeroBackground from "@/components/3d/HeroBackground";
import { useState, useEffect, useRef } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";

function TerminalMock() {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const logSequences = [
    "npm run dev",
    "✔ next.config.js loaded successfully",
    "ℹ compiling client & server...",
    "✔ compiled client successfully in 430ms",
    "✔ compiled server successfully in 320ms",
    "ℹ watching for local workspace changes...",
    "✔ initialized tailwind css v4 engine",
    "⚡ ready on http://localhost:3000",
    "GET / - 200 OK (85ms)",
    "GET /api/theme - default: brutalist (12ms)",
    "✔ all systems operational",
  ];

  useEffect(() => {
    if (currentLine < logSequences.length) {
      const delay = currentLine === 0 ? 600 : currentLine === 2 ? 1400 : currentLine === 5 ? 1000 : 700;
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, logSequences[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Loop logs after compilation
      const timer = setTimeout(() => {
        setLogs([]);
        setCurrentLine(0);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <SpotlightCard className="w-full border border-[var(--color-border)] rounded-2xl shadow-2xl relative z-10 overflow-hidden bg-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-white/5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-xs font-mono text-[var(--color-muted)] font-medium">rohit@workspace:~</span>
        <div className="w-12"></div>
      </div>
      <div
        ref={containerRef}
        className="p-5 h-[340px] font-mono text-xs flex flex-col gap-2 overflow-y-auto scrollbar-thin text-white/90"
      >
        <div className="text-[var(--color-muted)] mb-2 border-b border-[var(--color-border)]/50 pb-2">
          <p>ROHIT WORKSPACE [Version 1.0.0]</p>
          <p>(c) 2026 Rohit. All rights reserved.</p>
        </div>

        {logs.map((log, index) => {
          let colorClass = "text-white/90";
          if (log.startsWith("✔")) colorClass = "text-green-400";
          else if (log.startsWith("ℹ")) colorClass = "text-[var(--color-primary)] opacity-80";
          else if (log.startsWith("⚡")) colorClass = "text-[var(--color-primary)] font-bold";
          else if (log.startsWith("npm")) colorClass = "text-[var(--color-accent)]";
          else if (log.includes("200 OK")) colorClass = "text-emerald-400";

          return (
            <div key={index} className="flex gap-2.5 items-start">
              <span className="text-[var(--color-primary)] select-none">❯</span>
              <span className={colorClass}>{log}</span>
            </div>
          );
        })}
        {currentLine < logSequences.length && (
          <div className="flex gap-2.5 items-center">
            <span className="text-[var(--color-primary)] select-none">❯</span>
            <span className="w-2 h-4 bg-[var(--color-primary)] animate-pulse"></span>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const name = "ROHIT".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      <HeroBackground />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (Content) */}
          <div className="lg:col-span-12 flex flex-col items-center text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card)]/50 border border-[var(--color-primary)]/30 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--color-primary)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Sparkles size={14} className="text-[var(--color-primary)]" />
                <span className="text-sm font-medium text-white/90">Available for new opportunities</span>
              </div>
            </motion.div>

            {/* Staggered Name Reveal */}
            <div className="flex overflow-hidden mb-4 drop-shadow-2xl">
              {name.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="font-hero text-7xl md:text-9xl lg:text-[10rem] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20"
                >
                  {char
                  }</motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative max-w-xl"
            >
              {/* Glowing accent behind text */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4/5 h-2/3 bg-[var(--color-primary)]/10 blur-[80px] -z-10 rounded-full" />

              <h2 className="font-heading text-2xl md:text-4xl text-white font-medium mb-6 leading-snug">
                Crafting digital experiences that<br />
                <span className="text-[var(--color-primary)] font-semibold">people actually enjoy using.</span>
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-10 leading-relaxed font-mono">
                React • Next.js • Tailwind • Node.js
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/60 rounded-full font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Let's Talk</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-10 hidden md:flex justify-between items-center px-12 text-sm text-[var(--color-muted)] font-mono"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[var(--color-card)]/40 px-4 py-2 rounded-full backdrop-blur-xl border border-[var(--color-border)]/50 shadow-lg">
            <MapPin size={14} className="text-[var(--color-primary)]" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-2 bg-[var(--color-card)]/40 px-4 py-2 rounded-full backdrop-blur-xl border border-[var(--color-border)]/50 shadow-lg">
            <Clock size={14} className="text-[var(--color-accent)]" />
            <span>{time || "Loading..."}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[var(--color-card)]/40 px-4 py-2 rounded-full backdrop-blur-xl border border-[var(--color-border)]/50 shadow-lg">
          <div className="relative flex items-center justify-center h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </div>
          <span className="text-white/90 font-medium">All systems operational</span>
        </div>
      </motion.div>
    </section>
  );
}
