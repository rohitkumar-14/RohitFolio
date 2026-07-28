"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const categories = ["Frontend", "Backend", "Tools"];

  const skillsData: Record<string, any[]> = {
    Frontend: [
      { name: "React.js", level: 95, projects: 12, years: 2, commits: 1200, favorite: "Hooks" },
      { name: "Next.js", level: 90, projects: 8, years: 1.5, commits: 800, favorite: "App Router" },
      { name: "TypeScript", level: 85, projects: 10, years: 2, commits: 1500, favorite: "Interfaces" },
      { name: "JavaScript", level: 85, projects: 20, years: 3, commits: 2500, favorite: "ES6+" },
      { name: "Tailwind CSS", level: 95, projects: 15, years: 2.5, commits: 1000, favorite: "Utility Classes" },
      { name: "Redux Toolkit", level: 80, projects: 5, years: 1.5, commits: 400, favorite: "State Management" },
      { name: "Zustand", level: 85, projects: 4, years: 1, commits: 300, favorite: "Simplicity" },
    ],
    Backend: [
      { name: "Node.js", level: 70, projects: 6, years: 1.5, commits: 600, favorite: "Express" },
      { name: "Express.js", level: 70, projects: 6, years: 1.5, commits: 500, favorite: "Middleware" },
      { name: "MongoDB", level: 65, projects: 5, years: 1, commits: 300, favorite: "Mongoose" },
      { name: "MySQL", level: 60, projects: 3, years: 1, commits: 200, favorite: "Relational DB" },
    ],
    Tools: [
      { name: "Git & GitHub", level: 90, projects: 25, years: 3, commits: 5000, favorite: "Version Control" },
      { name: "Framer Motion", level: 85, projects: 8, years: 1.5, commits: 400, favorite: "Animations" },
      { name: "React Query", level: 80, projects: 5, years: 1, commits: 300, favorite: "Data Fetching" },
      { name: "Figma", level: 85, projects: 15, years: 2, commits: 0, favorite: "UI Design" },
      { name: "Postman", level: 85, projects: 20, years: 2, commits: 0, favorite: "API Testing" },
    ]
  };

  return (
    <section id="stack" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-[var(--color-muted)] max-w-xl">
            A comprehensive overview of my technical skills, confidence levels, and experience.
          </p>
        </motion.div>

        {/* Dashboard Layout */}
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActiveSkill(null); }}
                className={`px-4 py-3 text-left rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium border border-[var(--color-primary)]/30"
                    : "text-[var(--color-muted)] hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-4">
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  activeSkill === skill.name
                    ? "bg-[var(--color-card)] border-[var(--color-primary)]/50"
                    : "bg-[var(--color-card)]/30 border-[var(--color-border)] hover:border-white/20 cursor-pointer"
                }`}
                onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
              >
                {/* Header (Always Visible) */}
                <div className="p-5 flex items-center justify-between">
                  <div className="w-[30%] font-medium text-white">{skill.name}</div>
                  <div className="w-[70%] h-2 bg-black rounded-full overflow-hidden flex">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {activeSkill === skill.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-black/20"
                    >
                      <div className="p-5 pt-0 border-t border-[var(--color-border)]/50 mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)]">
                          <div className="text-xs text-[var(--color-muted)] mb-1">Projects</div>
                          <div className="font-numbers text-xl font-bold text-white">{skill.projects}</div>
                        </div>
                        <div className="p-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)]">
                          <div className="text-xs text-[var(--color-muted)] mb-1">Experience</div>
                          <div className="font-numbers text-xl font-bold text-white">{skill.years} yrs</div>
                        </div>
                        <div className="p-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)]">
                          <div className="text-xs text-[var(--color-muted)] mb-1">Commits</div>
                          <div className="font-numbers text-xl font-bold text-white">{skill.commits || "N/A"}</div>
                        </div>
                        <div className="p-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)]">
                          <div className="text-xs text-[var(--color-muted)] mb-1">Favorite</div>
                          <div className="text-sm font-bold text-[var(--color-primary)] mt-1 truncate">{skill.favorite}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
