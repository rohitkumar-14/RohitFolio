"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Command } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${
        scrolled ? "pt-2" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "w-[90%] md:w-[70%] bg-black/50" : "w-[95%] md:w-[85%] bg-black/20"
        }`}
      >
        <Link href="/" className="text-xl font-hero font-bold tracking-tighter flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-pulse" />
          </div>
          ROHIT
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="flex items-center gap-2 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors text-white">
          <Command size={14} />
          <span>Cmd + K</span>
        </button>
      </div>
    </motion.nav>
  );
}
