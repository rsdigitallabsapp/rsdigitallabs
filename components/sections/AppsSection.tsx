"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { apps, AppCard } from "@/components/portfolio/apps-data";

export function AppsSection({
  eyebrow = "Proof of Work",
  heading = (
    <>
      This is what your project{" "}
      <span className="gradient-text">looks like in our hands.</span>
    </>
  ),
  intro = "Every product below was designed and built by RS Digital Labs, end to end — from first sketch to app-store-ready, no outsourcing, no bloat, no feature theater.",
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  intro?: string;
}) {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
              {eyebrow}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-slate-300 text-lg max-w-xl mx-auto"
          >
            {intro}
          </motion.p>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
