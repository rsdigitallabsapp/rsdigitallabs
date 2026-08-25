"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(
  () => import("../three/HeroCanvas").then((m) => ({ default: m.HeroCanvas })),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />
    ),
  }
);

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Canvas — absolute background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #020208 100%)",
        }}
      />

      {/* Legibility scrim — keeps the text column readable regardless of what the scene is doing */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 32% at 50% 40%, rgba(2,2,8,0.5) 0%, transparent 75%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #020208)",
        }}
      />

      {/* Text content — rendered plainly (no entrance animation) so it's visible
          immediately, before the 3D scene or any JS has had a chance to run. */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span
            className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase"
          >
            Product Design &amp; Development Studio
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="text-white">We design and build websites, apps,</span>
          <br />
          <span className="gradient-text">and digital products that work.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          RS Digital Labs is a product studio for local and small
          businesses. We take your idea from first sketch to a live
          website or app — and everything on this page is proof, not a
          pitch deck.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#footer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(168,85,247,0.15)",
            }}
          >
            <span className="relative z-10">Start a Project</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-200 glass cursor-pointer transition-all duration-300 hover:border-violet-500/40 hover:text-white"
          >
            See What We've Built
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-violet-700/40 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-2.5 bg-violet-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
