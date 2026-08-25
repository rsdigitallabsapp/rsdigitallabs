"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export type ServiceGroup = {
  title: string;
  color: string;
  accentBg: string;
  icon: React.ReactNode;
  items: string[];
};

export function ServiceGrid({
  eyebrow,
  heading,
  intro,
  services,
  closingText,
  closingCtaLabel = "Start a Project",
  closingCtaHref = "#contact",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  services: ServiceGroup[];
  closingText: React.ReactNode;
  closingCtaLabel?: string;
  closingCtaHref?: string;
}) {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">
              {eyebrow}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-slate-300 text-lg leading-relaxed"
          >
            {intro}
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 transition-all duration-300 hover:border-white/20"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: s.accentBg }}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{closingText}</p>
          <a
            href={closingCtaHref}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
            }}
          >
            {closingCtaLabel}
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
