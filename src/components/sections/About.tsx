"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Rocket, BookOpen, Layers } from "lucide-react";

import SpotlightCard from "@/components/ui/SpotlightCard";

export default function About() {
  const stats = [
    { icon: <Briefcase className="text-[var(--color-primary)]" />, title: "2 Years", subtitle: "Experience" },
    { icon: <Rocket className="text-[var(--color-accent)]" />, title: "10+", subtitle: "Projects" },
    { icon: <Layers className="text-[var(--color-secondary)]" />, title: "5 Core", subtitle: "Technologies" },
    { icon: <Code2 className="text-white" />, title: "100K+", subtitle: "Lines of Code" },
    { icon: <BookOpen className="text-yellow-400" />, title: "Always", subtitle: "Learning" },
  ];

  const timeline = [
    { year: "2024", title: "Started Web Development", desc: "Built first HTML/CSS pages" },
    { year: "2024", title: "MERN Stack", desc: "Mastered React & Node.js" },
    { year: "2025", title: "Frontend Engineer", desc: "First professional role" },
    { year: "2025", title: "Enterprise Apps", desc: "Scaling React applications" },
    { year: "2026", title: "Learning AI", desc: "Integrating LLMs into products" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Interactive Intro Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full w-full">
                <div className="p-6 flex flex-col items-center justify-center text-center gap-3 h-full">
                  <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="font-numbers text-xl font-bold text-white">{stat.title}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{stat.subtitle}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-card)] to-black border border-[var(--color-border)] relative group">
              <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img src="/images/avatar.png" alt="Developer Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-[var(--color-primary)]/30 rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">My Story</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border)] before:to-transparent">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-current rounded-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm group-hover:border-[var(--color-primary)]/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <span className="font-numbers text-xs text-[var(--color-primary)] font-medium px-2 py-1 bg-[var(--color-primary)]/10 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
