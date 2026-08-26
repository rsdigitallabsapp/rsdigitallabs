"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    name: "Discover",
    label: "Understand the problem",
    description: "We start by listening — your business, your customers, what's working, and what isn't. No proposal gets written before we understand the problem.",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Define",
    label: "Scope the right build",
    description: "We turn what we learned into a concrete plan — what gets built, what it costs, and when it ships. No guessing, no scope creep later.",
    color: "#22D3EE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Design",
    label: "Make it look right",
    description: "Real screens, not mood boards. We design the actual product so you can see and react to it before a single line of code ships.",
    color: "#60A5FA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M15 4l5 5-11 11H4v-5L15 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Build",
    label: "Make it work",
    description: "We write the code — clean, tested, and built to last past launch day, not just to demo well once.",
    color: "#818CF8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M13 5l-2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Launch",
    label: "Ship it for real",
    description: "We handle the unglamorous parts — deployment, app-store submission, and the last-mile details most agencies leave for you to figure out.",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Improve",
    label: "Keep it working",
    description: "Launch is the start, not the finish. We stick around to iterate on real usage, real feedback, and real numbers.",
    color: "#22D3EE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 3v4h-4M6 21v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function TimelineSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--paper)" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(129,140,248,0.06) 0%, transparent 70%)",
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
              How We Work
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            From first sketch{" "}
            <span className="gradient-text-light">to launch day.</span>
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
            {steps.map((m, i) => {
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
                      className="glass-light rounded-2xl p-7 transition-all duration-500 hover:border-opacity-60 group"
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
                      </div>

                      <h3
                        className="text-2xl font-bold mb-2 transition-colors duration-300"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.name}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{m.description}</p>
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
