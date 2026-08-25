"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2024",
    quarter: "Q1",
    name: "CHIQ",
    label: "First Ship",
    description: "An AI assistant built because the existing options were too complicated, too expensive, or too generic. CHIQ was built to be straightforward and genuinely useful.",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    year: "2024",
    quarter: "Q3",
    name: "Plannie",
    label: "Task Intelligence",
    description: "Planning tools that existed were either too simple or too complex. Plannie hits the middle: smart enough to help, simple enough to use every day.",
    color: "#22D3EE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    year: "2025",
    quarter: "Q1",
    name: "OLIVIA",
    label: "Personal Assistant",
    description: "A true personal companion that understands your context, handles the routine, and surfaces what actually needs your attention. Private by design.",
    color: "#60A5FA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    year: "2025+",
    quarter: "∞",
    name: "Marketplace",
    label: "What's Next",
    description: "The lab is always running. New marketplace apps and tools are in active development. Problems to solve, products to ship — the work continues.",
    color: "#818CF8",
    future: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
];

export function TimelineSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(129,140,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-indigo-400 uppercase">
              Roadmap
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            From idea to{" "}
            <span className="gradient-text">shipped product.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.4) 20%, rgba(34,211,238,0.4) 80%, transparent)",
            }}
          />

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row ${isRight ? "md:flex-row-reverse" : ""} gap-8 items-start md:items-center`}
                >
                  {/* Content card */}
                  <div className={`flex-1 pl-16 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12"}`}>
                    <div
                      className="glass rounded-2xl p-7 transition-all duration-500 hover:border-opacity-60 group"
                      style={{
                        borderColor: m.color + "20",
                      }}
                    >
                      {/* Top row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-lg"
                          style={{ background: m.color + "20", color: m.color }}
                        >
                          {m.icon}
                        </div>
                        <div
                          className="text-xs font-mono tracking-widest uppercase"
                          style={{ color: m.color }}
                        >
                          {m.label}
                        </div>
                        {m.future && (
                          <div
                            className="ml-auto text-xs px-2 py-0.5 rounded-full font-mono"
                            style={{
                              color: m.color,
                              background: m.color + "15",
                              border: `1px solid ${m.color}30`,
                            }}
                          >
                            upcoming
                          </div>
                        )}
                      </div>

                      <h3
                        className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-white"
                        style={{ color: m.future ? "rgba(255,255,255,0.5)" : "#F1F5F9" }}
                      >
                        {m.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-y-0 md:-translate-y-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: m.color,
                        boxShadow: `0 0 20px ${m.color}80, 0 0 40px ${m.color}40`,
                      }}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
