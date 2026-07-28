"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";

import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Projects() {
  const projects = [
    {
      slug: "kinetic-ui",
      title: "Kinetic UI",
      description: "Animated React Component Library leveraging Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: "Engineered high-performance UI component library",
      image: "/kinetic-ui.png",
      link: "https://kinetiic-ui.netlify.app",
      github: "https://github.com/rohitkumar-14/kinetic-ui"
    },
    {
      slug: "vibe-data",
      title: "Vibe Data",
      description: "An interactive data platform delivering dynamic visualizations and insights through modern frontend technologies.",
      tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],
      metrics: "Real-time interactive data dashboards",
      image: "/vibe-data.png",
      link: "https://vibedata-frontend.onrender.com",
      github: "https://github.com/rohitkumar-14/Vibedata"
    },
    {
      slug: "kiddos-tales",
      title: "Kiddos Tales",
      description: "AI-Powered Story Generation Platform with customizable story workflows and interactive book-style reading experience.",
      tech: ["React.js", "Tailwind CSS", "Gemini API", "Framer Motion"],
      metrics: "Personalized multilingual story generation",
      image: "/kiddos-tales.png",
      link: "https://kiddos-tales.netlify.app/",
      github: "https://github.com/rohitkumar-14/Kiddos-Tales"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-[var(--color-muted)] max-w-xl">
              A selection of my best projects, focusing on performance, complex architectures, and user experience.
            </p>
          </div>
          <Link href="/projects" className="text-[var(--color-primary)] hover:underline flex items-center gap-2 font-medium">
            View All Archives <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Image Section */}
                <div className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link href={project.link !== "#" ? project.link : "#"} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </div>
                  </Link>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-numbers text-[var(--color-primary)] text-6xl opacity-30 font-bold">0{index + 1}</span>
                    <h3 className="font-heading text-3xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <SpotlightCard className="mb-6 relative z-10 lg:-ml-10 shadow-2xl backdrop-blur-md">
                    <div className="p-6 bg-black/60 rounded-xl">
                      <p className="text-[var(--color-muted)] mb-4">{project.description}</p>
                      <div className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-2 rounded font-medium text-sm inline-block border border-[var(--color-accent)]/20">
                        Metric: {project.metrics}
                      </div>
                    </div>
                  </SpotlightCard>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-[var(--color-muted)] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-colors">
                      <Code2 size={20} />
                    </a>
                    <a href={project.link !== "#" ? project.link : "#"} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
