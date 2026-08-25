"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const paths = [
  {
    href: "/website",
    label: "I need a website",
    desc: "Marketing sites, ecommerce, and full brand overhauls.",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.35)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h24M16 4c3 3.2 4.5 7.4 4.5 12S19 24.8 16 28c-3-3.2-4.5-7.4-4.5-12S13 7.2 16 4z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/app",
    label: "I need an app",
    desc: "Mobile apps, web apps, and internal tools that ship.",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.35)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="9" y="3" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="23" x2="23" y2="23" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function PathCard({ path }: { path: (typeof paths)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={path.href}
      className="group relative rounded-2xl p-6 text-left overflow-hidden transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(5,5,14,0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 0 50px ${path.glow}, 0 12px 40px rgba(0,0,0,0.4)` : "none",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: path.glow.replace("0.35", "0.12"), color: path.color }}
      >
        {path.icon}
      </div>
      <div className="text-lg font-bold text-white mb-1.5">{path.label}</div>
      <p className="text-sm text-slate-300 leading-relaxed mb-4">{path.desc}</p>
      <div
        className="flex items-center gap-2 text-sm font-semibold transition-all duration-300"
        style={{ color: path.color, transform: hovered ? "translateX(4px)" : "translateX(0)" }}
      >
        Get started
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
}

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
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32">
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
            "radial-gradient(ellipse 55% 60% at 50% 42%, rgba(2,2,8,0.55) 0%, transparent 78%)",
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
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow label — hidden on the smallest screens, where it would
            otherwise run into the fixed header above it */}
        <div className="hidden sm:flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span
            className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase"
          >
            Product Design &amp; Development Studio
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
          What do you need us to build?
        </h1>

        {/* Two-choice path cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {paths.map((p) => (
            <PathCard key={p.href} path={p} />
          ))}
        </div>

        {/* Studio line */}
        <p className="mt-8 text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          RS Digital Labs designs and builds premium digital experiences for
          businesses and founders — from first concept to launch.
        </p>
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
