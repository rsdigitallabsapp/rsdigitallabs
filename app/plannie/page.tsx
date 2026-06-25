"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { FooterSection } from "@/components/sections/FooterSection";

// ─── Design tokens ────────────────────────────────────────────────────────────
const CYAN = "#22D3EE";
const ROSE = "#FB7185";

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[220px] h-[440px] ${className}`}>
      {/* Frame */}
      <div
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: "#08091a",
          border: "1.5px solid rgba(255,255,255,0.1)",
          boxShadow: `0 0 60px rgba(34,211,238,0.15), 0 40px 80px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-[10px] font-mono text-white/50">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-1.5 rounded-sm border border-white/30 relative">
              <div className="absolute inset-[1px] right-[3px] bg-white/50 rounded-sm" />
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="px-4 pt-1">
          {/* App header */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-base font-bold tracking-tight"
              style={{ color: CYAN }}
            >
              plannie
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "rgba(34,211,238,0.1)", border: `1px solid ${CYAN}30` }}
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                <circle cx="8" cy="5" r="3" stroke={CYAN} strokeWidth="1.2" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={CYAN} strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Location chip */}
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-4"
            style={{ background: "rgba(34,211,238,0.08)", border: `1px solid ${CYAN}25` }}
          >
            <svg viewBox="0 0 16 16" className="w-3 h-3 flex-shrink-0" fill={CYAN}>
              <path d="M8 1C5.239 1 3 3.239 3 6c0 3.5 5 9 5 9s5-5.5 5-9c0-2.761-2.239-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span className="text-[11px] text-white/70 truncate">New York City, NY</span>
          </div>

          {/* Category chips */}
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {["Food", "Activities", "For Me ✨"].map((cat, i) => (
              <div
                key={cat}
                className="rounded-full px-2.5 py-1 text-[9px] font-medium"
                style={{
                  background: i === 0 ? CYAN : "rgba(255,255,255,0.05)",
                  color: i === 0 ? "#08091a" : "rgba(255,255,255,0.5)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Divider label */}
          <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">
            Nearby
          </p>

          {/* Result cards */}
          {[
            { name: "La Maison", type: "French Restaurant", rating: "4.8", dist: "0.3 mi" },
            { name: "Rooftop Social", type: "Cocktail Bar", rating: "4.6", dist: "0.5 mi" },
            { name: "Sakura Garden", type: "Japanese Cuisine", rating: "4.7", dist: "0.7 mi" },
          ].map((place, i) => (
            <div
              key={place.name}
              className="rounded-xl p-2.5 mb-1.5 flex items-center gap-2.5"
              style={{
                background: i === 0 ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.03)",
                border: i === 0 ? `1px solid ${CYAN}20` : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ background: i === 0 ? `${CYAN}15` : "rgba(255,255,255,0.05)" }}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path
                    d="M3 6h10M6 3v3M10 3v3M4 9h8l-1 4H5L4 9z"
                    stroke={i === 0 ? CYAN : "rgba(255,255,255,0.3)"}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-white/80 truncate">{place.name}</p>
                <p className="text-[8px] text-white/35 truncate">{place.type}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-[9px] font-mono" style={{ color: CYAN }}>{place.rating}</p>
                <p className="text-[8px] text-white/30">{place.dist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#08091a] rounded-full z-10" />
    </div>
  );
}

function PhoneMockupSecondary({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[200px] h-[400px] ${className}`}>
      <div
        className="absolute inset-0 rounded-[32px] overflow-hidden"
        style={{
          background: "#06070f",
          border: "1.5px solid rgba(255,255,255,0.07)",
          boxShadow: `0 0 40px rgba(251,113,133,0.12), 0 40px 80px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-[10px] font-mono text-white/40">9:41</span>
        </div>

        <div className="px-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${ROSE}20` }}
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill={ROSE}>
                <path d="M8 14s-6-4.5-6-8a4 4 0 018 0 4 4 0 018 0c0 3.5-6 8-6 8z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Your Date</p>
              <p className="text-xs font-bold text-white/80">Tonight's Plan</p>
            </div>
          </div>

          {/* Plan steps */}
          {[
            { icon: "🍽", label: "Dinner", place: "The Rustic Table", time: "7:00 PM" },
            { icon: "🎬", label: "After", place: "Cinema Rex — Showtimes", time: "9:15 PM" },
            { icon: "☕", label: "Late Night", place: "Blue Bottle Coffee", time: "11:00 PM" },
          ].map((item, i) => (
            <div key={item.label} className="relative mb-3">
              {i < 2 && (
                <div
                  className="absolute left-3 top-10 w-px h-3"
                  style={{ background: `${ROSE}20` }}
                />
              )}
              <div
                className="rounded-2xl p-3"
                style={{
                  background: i === 0 ? `${ROSE}0a` : "rgba(255,255,255,0.03)",
                  border: i === 0 ? `1px solid ${ROSE}25` : "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-sm leading-none mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{item.label}</p>
                    <p className="text-[11px] font-semibold text-white/75 truncate">{item.place}</p>
                    <p className="text-[9px] font-mono mt-0.5" style={{ color: i === 0 ? ROSE : "rgba(255,255,255,0.25)" }}>
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Save button */}
          <button
            className="w-full rounded-xl py-2 text-[11px] font-semibold mt-1"
            style={{ background: `linear-gradient(135deg, ${ROSE}cc, ${ROSE}90)`, color: "#fff" }}
          >
            Save This Plan
          </button>
        </div>
      </div>
      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-[#06070f] rounded-full z-10" />
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function PlannieHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 80% 50%, ${CYAN}0a 0%, transparent 60%),
                       radial-gradient(ellipse 40% 50% at 20% 60%, ${ROSE}08 0%, transparent 55%)`,
        }}
      />

      {/* Animated ambient rings */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10">
        {[1, 0.6, 0.3].map((opacity, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${CYAN}`,
              transform: `scale(${0.6 + i * 0.2})`,
              opacity,
              animation: `spin-slow ${20 + i * 8}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${CYAN})` }} />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: CYAN }}>
                Plannie — By RS Digital Labs
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Never Wonder{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${CYAN}, ${ROSE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Where To Go
              </span>{" "}
              Again
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Plannie helps couples discover restaurants, coffee shops, brunch spots, activities,
              movies, and spontaneous date ideas in seconds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {/* App Store */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-not-allowed select-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                title="Coming soon"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-white/40 leading-none mb-0.5">Coming Soon on</p>
                  <p className="text-sm font-semibold text-white leading-none">App Store</p>
                </div>
              </div>

              {/* Play Store */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-not-allowed select-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                title="Coming soon"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
                  <path d="M3.18 23.76C3.65 24 4.2 23.97 4.76 23.66L17.43 12 4.76.34C4.2.03 3.65 0 3.18.24 2.23.75 2 1.76 2 2.88v18.24C2 22.24 2.23 23.25 3.18 23.76z" fill="#EA4335" />
                  <path d="M21.5 10.93l-3.18-1.83L14.5 12l3.82 2.9 3.18-1.83c.9-.52.9-1.62 0-2.14z" fill="#FBBC05" />
                  <path d="M4.76 23.66l9.74-11.66-2.77-2.77L4.76 23.66z" fill="#4285F4" />
                  <path d="M4.76.34l6.97 14.43 2.77-2.77L4.76.34z" fill="#34A853" />
                </svg>
                <div>
                  <p className="text-[10px] text-white/40 leading-none mb-0.5">Coming Soon on</p>
                  <p className="text-sm font-semibold text-white leading-none">Google Play</p>
                </div>
              </div>
            </motion.div>

            {/* Subtle legal links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <Link href="/plannie/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/plannie/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/plannie/delete-account" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Delete Account
              </Link>
            </motion.div>
          </div>

          {/* Right: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end items-center h-[480px]"
          >
            {/* Secondary phone (behind) */}
            <div className="absolute top-0 right-8 opacity-60" style={{ transform: "rotate(6deg) translateY(10px)" }}>
              <PhoneMockupSecondary />
            </div>
            {/* Primary phone (front) */}
            <div className="absolute top-8 right-36 z-10" style={{ transform: "rotate(-3deg)" }}>
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  { number: "01", title: "Choose a location", desc: "Set any city, neighborhood, or let Plannie detect where you are." },
  { number: "02", title: "Choose Food, Activities, or Choose For Me", desc: "Browse by category or let Plannie surprise you with a complete idea." },
  { number: "03", title: "Get curated recommendations nearby", desc: "Instantly see a curated list of places and activities tailored to your area." },
  { number: "04", title: "Save your favorite date ideas", desc: "Bookmark plans and revisit them anytime — never lose a great idea again." },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${CYAN}05 0%, transparent 65%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${CYAN})` }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: CYAN }}>
              How It Works
            </span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${CYAN})` }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Four steps to finding{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${CYAN}, ${ROSE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              something fun to do.
            </span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-6 h-px z-10 -translate-y-1/2"
                  style={{ background: `linear-gradient(to right, ${CYAN}40, transparent)` }}
                />
              )}

              <div
                className="rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-opacity-40"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div
                  className="text-3xl font-bold font-mono mb-5 block"
                  style={{
                    background: `linear-gradient(135deg, ${CYAN}, ${ROSE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const featureGroups = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M6 10h20M10 6v4M22 6v4M8 14h16l-2 8H10L8 14z" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 14v8" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Food Discovery",
    color: CYAN,
    items: ["Restaurants", "Coffee Shops", "Brunch Spots", "Dessert Places", "Drinks & Cocktails"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="10" stroke={ROSE} strokeWidth="1.5" />
        <path d="M16 10v6l4 3" stroke={ROSE} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 6l2 2M24 6l-2 2M8 26l2-2M24 26l-2-2" stroke={ROSE} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Activities",
    color: ROSE,
    items: ["Indoor Activities", "Outdoor Activities", "Water Activities", "Outdoor Games", "Movies"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M16 4l2.5 7.5H26l-6.5 4.5 2.5 7.5L16 19l-6 4.5 2.5-7.5L6 11.5h7.5L16 4z" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Choose For Me",
    color: "#A78BFA",
    desc: "Let Plannie instantly generate a complete date idea — one tap, full plan.",
    items: [],
  },
];

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${ROSE})` }} />
            <span className="text-xs font-mono tracking-[0.3em] text-slate-500 uppercase">Features</span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${ROSE})` }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Everything you need for a{" "}
            <span style={{ background: `linear-gradient(135deg, ${ROSE}, #A78BFA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              great date.
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${group.color}18`,
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${group.color}12` }}
              >
                {group.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>

              {group.desc && (
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{group.desc}</p>
              )}

              {group.items.length > 0 && (
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: group.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Premium ──────────────────────────────────────────────────────────────────
const premiumFeatures = [
  "More date plans",
  "Unlimited exploration",
  "Surprise Date Generator",
  "Share Plans",
  "Future premium features",
];

function Premium() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${CYAN}06 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${CYAN}25`,
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${CYAN}12 0%, transparent 65%)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${ROSE}0a 0%, transparent 65%)` }}
          />

          {/* Badge */}
          <div className="relative flex items-center justify-center gap-2 mb-6">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill={CYAN}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: CYAN }}>
              Premium
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Plannie{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${CYAN}, ${ROSE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium
            </span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
            Unlock unlimited possibilities and make every date unforgettable.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10 max-w-md mx-auto">
            {premiumFeatures.map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${CYAN}15` }}
                >
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M2 6l3 3 5-5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
            style={{
              background: `linear-gradient(135deg, ${CYAN}cc, ${CYAN}80)`,
              color: "#08091a",
              boxShadow: `0 0 30px ${CYAN}30`,
            }}
          >
            Available in the App
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is Plannie?",
    a: "Plannie helps couples discover great places and activities for memorable dates. From restaurants and coffee shops to movies and outdoor adventures — Plannie surfaces the best options near you in seconds.",
  },
  {
    q: "How does Plannie find recommendations?",
    a: "Recommendations are generated based on the location selected by the user and available nearby places. Plannie combines location data with curated categories to surface the most relevant options for your date.",
  },
  {
    q: "Why do I sometimes see results outside my city?",
    a: "When limited options exist within a selected area, Plannie may include nearby areas to provide better recommendations. This ensures you always have great options to choose from, even in smaller areas.",
  },
  {
    q: "Why do I sometimes see recommendations outside my selected area?",
    a: "Plannie searches within your selected area first. When limited options are available, nearby areas may be included to provide better recommendations.",
  },
  {
    q: "Can I save plans?",
    a: "Yes. Favorite date ideas and plans can be saved for future reference. With Plannie Premium, you get unlimited saves and the ability to share plans with your partner.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="relative max-w-3xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${CYAN})` }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: CYAN }}>
              FAQ
            </span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${CYAN})` }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Common questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                style={{
                  background: open === i ? `${CYAN}08` : "rgba(255,255,255,0.025)",
                  border: `1px solid ${open === i ? `${CYAN}30` : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white text-base">{faq.q}</span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                    style={{
                      background: `${CYAN}12`,
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                      <path d="M6 2v8M2 6h8" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed mt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PlanniePage() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main style={{ background: "#020208" }}>
        <PlannieHero />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Features />
        <div className="section-divider" />
        <Premium />
        <div className="section-divider" />
        <FAQ />
        <FooterSection />
      </main>
    </>
  );
}
