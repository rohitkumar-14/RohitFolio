"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const themes = [
  { id: "default", name: "Brutalist", primary: "#CCFF00", bg: "#000000" },
  { id: "theme-cyberpunk", name: "Cyberpunk", primary: "#00E5FF", bg: "#050505" },
  { id: "theme-midnight", name: "Midnight Ocean", primary: "#38BDF8", bg: "#0B1120" },
  { id: "theme-solar", name: "Solar Flare", primary: "#FF5D73", bg: "#0A0908" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default");

  const applyTheme = (themeId: string) => {
    themes.forEach(t => {
      if (t.id !== "default") {
        document.documentElement.classList.remove(t.id);
      }
    });
    if (themeId !== "default") {
      document.documentElement.classList.add(themeId);
    }
  };

  const handleHover = (themeId: string) => {
    applyTheme(themeId);
  };

  const handleLeave = () => {
    applyTheme(activeTheme);
  };

  const handleClick = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => { setIsOpen(false); handleLeave(); }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 mb-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-2 shadow-2xl backdrop-blur-md flex flex-col gap-1 w-48"
            >
              <div className="text-xs font-medium text-[var(--color-muted)] px-3 py-2">Select Theme</div>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onMouseEnter={() => handleHover(theme.id)}
                  onClick={() => handleClick(theme.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${
                    activeTheme === theme.id ? "bg-white/10 text-white" : "text-[var(--color-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.primary }} />
                  {theme.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <button className="w-12 h-12 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full flex items-center justify-center text-white hover:border-[var(--color-primary)] transition-all shadow-xl group">
          <Palette size={20} className="group-hover:scale-110 transition-transform text-[var(--color-primary)]" />
        </button>
      </div>
    </div>
  );
}
