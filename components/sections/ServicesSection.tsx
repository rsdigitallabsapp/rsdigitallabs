"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Product Design",
    color: "#A855F7",
    accentBg: "rgba(168,85,247,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M22 6L26 10L12 24H8V20L22 6Z" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 10L22 14" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    items: ["Brand & visual identity", "UI/UX & design systems", "Motion & interaction design"],
  },
  {
    title: "Web & App Development",
    color: "#22D3EE",
    accentBg: "rgba(34,211,238,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M11 10L5 16L11 22" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10L27 16L21 22" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 7L14 25" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    items: ["Marketing & product websites", "Web apps & dashboards", "iOS & Android apps"],
  },
  {
    title: "Ongoing Partnership",
    color: "#818CF8",
    accentBg: "rgba(129,140,248,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M9 16a5 5 0 1010 0 5 5 0 00-10 0z" stroke="#818CF8" strokeWidth="1.5" />
        <path d="M25 10v6h-6" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 16a9 9 0 00-15.5-6.3" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    items: ["Post-launch iteration", "Performance & analytics", "Feature roadmaps that ship"],
  },
];

export function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
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
              What We Build
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            One team.{" "}
            <span className="gradient-text">Design to deployment.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-slate-300 text-lg leading-relaxed"
          >
            We work like a product studio, not a vendor — for local and
            small businesses who need a website, an app, or a full digital
            product done right, the same process we use on our own apps is
            the one we bring to your project.
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
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No cookie-cutter websites. Every project is adapted to the
            business, audience, and goals.{" "}
            <span className="text-white font-medium">
              The team that builds our own apps builds yours.
            </span>
          </p>
          <a
            href="#footer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white cursor-pointer transition-all duration-300 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
            }}
          >
            Start a Project
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
