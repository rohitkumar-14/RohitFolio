"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function InteractiveCode() {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  
  const codeString = `const developer = {
  name: "Rohit",
  location: "India",
  frontend: ["React", "Next.js", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  passion: "Building products people actually enjoy using.",
  sayHi: function() {
    console.log("Hello, world!");
  }
};`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeString.length) {
        setText((prev) => prev + codeString.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-sm text-[var(--color-muted)] font-mono">
                <Terminal size={14} />
                <span>developer.ts</span>
              </div>
            </div>
            
            <button 
              onClick={handleCopy}
              className="text-[var(--color-muted)] hover:text-white transition-colors p-1.5 bg-white/5 rounded-md hover:bg-white/10"
              title="Copy code"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Editor Content */}
          <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              {/* Line Numbers */}
              <div className="text-gray-600 text-right select-none flex flex-col font-numbers">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              
              {/* Code */}
              <div className="text-gray-300 whitespace-pre">
                <span dangerouslySetInnerHTML={{
                  __html: text
                    .replace(/const/g, '<span class="text-blue-400">const</span>')
                    .replace(/developer/g, '<span class="text-yellow-200">developer</span>')
                    .replace(/name:|location:|frontend:|backend:|passion:|sayHi:/g, match => `<span class="text-blue-300">${match}</span>`)
                    .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
                    .replace(/function/g, '<span class="text-blue-400">function</span>')
                    .replace(/console\.log/g, '<span class="text-yellow-200">console</span>.<span class="text-blue-300">log</span>')
                }} />
                <span className="inline-block w-2 h-5 bg-white/70 ml-1 animate-pulse align-middle" />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
