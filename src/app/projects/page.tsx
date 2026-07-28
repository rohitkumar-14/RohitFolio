"use client";

import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsArchive() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-24 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-24 h-24 bg-[var(--color-card)] rounded-full border border-[var(--color-border)] flex items-center justify-center mb-4">
            <Construction size={48} className="text-[var(--color-primary)]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Projects Archive</h1>
          <p className="text-[var(--color-muted)] text-lg mb-8">
            The full project archive case studies are currently being built. Check out the featured projects on the homepage in the meantime!
          </p>
          <Link 
            href="/#projects"
            className="px-6 py-3 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ArrowLeft size={18} />
            Back to Featured Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
