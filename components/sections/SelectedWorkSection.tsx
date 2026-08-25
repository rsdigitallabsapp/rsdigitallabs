"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { apps, AppCard } from "@/components/portfolio/apps-data";
import { RestaurantConcept } from "@/components/portfolio/RestaurantConcept";
import { MedicalConcept } from "@/components/portfolio/MedicalConcept";
import { CursorImageTrail } from "@/components/portfolio/CursorImageTrail";

const trailImages = [
  "/trail/restaurant.png",
  "/trail/arise.png",
  "/trail/medical.png",
  "/trail/chiq.png",
  "/trail/landscaping.png",
  "/trail/plannie.png",
];

const featuredApps = apps.filter((a) => a.id === "arise" || a.id === "chiq");

const concepts = [
  {
    id: "restaurant",
    title: "Restaurant Concept",
    blurb: "A warm, appetite-first homepage built to drive reservations.",
    node: <RestaurantConcept />,
  },
  {
    id: "medical",
    title: "Medical/Dental Concept",
    blurb: "A calm, trustworthy layout built to drive appointment requests.",
    node: <MedicalConcept />,
  },
];

function ConceptCard({
  title,
  blurb,
  node,
  index,
}: {
  title: string;
  blurb: string;
  node: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-6 flex items-center justify-center">{node}</div>
      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed max-w-xs">{blurb}</p>
    </motion.div>
  );
}

export function SelectedWorkSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <CursorImageTrail images={trailImages} className="max-w-6xl mx-auto">
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
              Selected Work
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Websites and apps,{" "}
            <span className="gradient-text">built the same way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-slate-300 text-lg max-w-xl mx-auto"
          >
            Everything below was genuinely designed and built by RS Digital
            Labs — real product work and real concept design, no
            outsourcing, no feature theater.
          </motion.p>
        </div>

        {/* Mixed grid: 2 website concepts + 2 app products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {concepts.map((c, i) => (
            <ConceptCard key={c.id} title={c.title} blurb={c.blurb} node={c.node} index={i} />
          ))}
          {featuredApps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i + concepts.length} variant="bare" />
          ))}
        </div>

        {/* Path links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/website"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-200 glass cursor-pointer transition-all duration-300 hover:border-violet-500/40 hover:text-white"
          >
            See all website work
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/app"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-200 glass cursor-pointer transition-all duration-300 hover:border-violet-500/40 hover:text-white"
          >
            See all app work
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </CursorImageTrail>
    </section>
  );
}
