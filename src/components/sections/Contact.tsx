"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Code2, Link as LinkIcon, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "rohitk1400@gmail.com",
    href: "mailto:rohitk1400@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9351027145",
    href: "tel:+919351027145",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Code2,
    label: "GitHub",
    href: "https://github.com/rohitkumar-14/",
  },
  {
    icon: LinkIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rohit-kumar-0988771b7/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto text-lg">
            I&apos;m currently open to freelance work and full-time opportunities. Whether you have a project idea or just want to connect — reach out!
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/60 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-white font-medium group-hover:text-[var(--color-primary)] transition-colors">{item.value}</div>
                </div>
              </motion.div>
            );

            return item.href ? (
              <a key={index} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* CTA + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8"
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">Find me on the web</h3>
            <p className="text-[var(--color-muted)] text-sm">Check out my work and professional profile.</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[var(--color-primary)] hover:text-black border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white rounded-full text-sm font-medium transition-all duration-300"
                >
                  <Icon size={16} />
                  {social.label}
                </a>
              );
            })}

            <a
              href="mailto:rohitk1400@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary)]/90 border border-[var(--color-primary)] rounded-full text-sm font-bold transition-all duration-300"
            >
              <Mail size={16} />
              Say Hello
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
