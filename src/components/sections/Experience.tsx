"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const experiences = [
    {
      role: "Software Developer",
      company: "YoekiSoft Pvt. Ltd.",
      period: "April 2026 - Present",
      responsibilities: [
        "Developed responsive and scalable frontend applications using Next.js, React.js, Tailwind CSS, and Mantine UI for a Unified Management System in the banking domain.",
        "Built and integrated Corporate Onboarding, User Creation, and Mandate Form modules by consuming REST APIs and implementing form validations and state management."
      ],
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Mantine UI", "REST APIs"],
      impact: "Built Unified Management System modules for the banking domain.",
    },
    {
      role: "Frontend Developer",
      company: "ABYM Technology Pvt. Ltd.",
      period: "April 2025 - April 2026",
      responsibilities: [
        "Developed a centralized Lead Management System to track, manage, and convert leads efficiently using React.js, Redux Toolkit, and REST APIs.",
        "Designed and implemented a Subscription Management System with plan selection, renewal workflows, and wallet integration for seamless user transactions.",
        "Built reusable dynamic form components and centralized state management workflows for configurable and scalable application features.",
        "Developed an end-to-end Hospital Management System using React.js, TypeScript, and Ant Design (AntD), including patient, doctor, and appointment management modules.",
        "Collaborated with backend teams for API integration, debugging, testing, and production deployment workflows."
      ],
      technologies: ["React.js", "Redux Toolkit", "REST APIs", "TypeScript", "Ant Design"],
      impact: "Successfully developed LMS, Subscription and Hospital Management Systems.",
    },
    {
      role: "Web Application Developer",
      company: "Electrichiive LLP",
      period: "Aug 2024 - March 2025",
      responsibilities: [
        "Developed responsive admin dashboards, business management interfaces, websites and blog interfaces using React.js and Tailwind CSS.",
        "Integrated RESTful APIs and handled asynchronous data management for multiple client projects.",
        "Improved frontend maintainability through component-based architecture and clean UI structure."
      ],
      technologies: ["React.js", "Tailwind CSS", "RESTful APIs"],
      impact: "Improved frontend maintainability and delivered multiple client projects.",
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            A timeline of my professional journey, the roles I've taken on, and the impact I've made.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === index 
                  ? "bg-[var(--color-card)] border-[var(--color-primary)]/50" 
                  : "bg-[var(--color-card)]/50 border-[var(--color-border)] hover:border-white/20"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <span className="text-[var(--color-muted)] font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-numbers text-sm text-[var(--color-primary)]">{exp.period}</span>
                  {openIndex === index ? <ChevronUp size={20} className="text-[var(--color-muted)]" /> : <ChevronDown size={20} className="text-[var(--color-muted)]" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-[var(--color-border)] mt-2">
                      <div className="grid md:grid-cols-2 gap-8 pt-4">
                        
                        <div>
                          <h4 className="text-white font-medium mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-medium mb-3">Impact</h4>
                            <p className="text-sm text-[var(--color-muted)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] p-3 rounded-lg border border-[var(--color-accent)]/20">
                              {exp.impact}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-medium mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-[var(--color-muted)]">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className="flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline mt-4">
                            <ImageIcon size={16} />
                            View Gallery
                          </button>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
