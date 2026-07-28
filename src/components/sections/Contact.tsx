"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Clock, Code2, Link as LinkIcon, Hash } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nReply to: ${email}`);
    
    window.location.href = `mailto:rohitk1400@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-card)] p-8 md:p-10 rounded-3xl border border-[var(--color-border)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">Let's build together</h2>
            <p className="text-[var(--color-muted)] mb-8">I'm currently available for freelance work and full-time roles.</p>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--color-muted)]">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full bg-black/50 border border-[var(--color-border)] rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--color-muted)]">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full bg-black/50 border border-[var(--color-border)] rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-muted)]">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full bg-black/50 border border-[var(--color-border)] rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[var(--color-primary)] text-black font-bold py-4 rounded-xl hover:bg-[var(--color-primary)]/90 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Get in touch</h2>
              <p className="text-[var(--color-muted)] text-lg max-w-md">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[var(--color-muted)]">
                <div className="w-12 h-12 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1">Email</div>
                  <a href="mailto:rohitk1400@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">
                    rohitk1400@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[var(--color-muted)]">
                <div className="w-12 h-12 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1">Location</div>
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[var(--color-muted)]">
                <div className="w-12 h-12 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1">Response Time</div>
                  <span>Usually within 24 hours</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-[var(--color-border)] flex gap-4">
              <a href="https://github.com/rohitkumar-14/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-full flex items-center justify-center transition-all">
                <Code2 size={18} />
              </a>
              <a href="https://linkedin.com/in/rohit-kumar-0988771b7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-full flex items-center justify-center transition-all">
                <LinkIcon size={18} />
              </a>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
