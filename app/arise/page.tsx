"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { FooterSection } from "@/components/sections/FooterSection";
import { ArisePhoneMockup as PhoneMockup } from "@/components/portfolio/ArisePhoneMockup";

// ─── Design tokens ────────────────────────────────────────────────────────────
const SAGE = "#8AAF8E";
const SAGE_LIGHT = "#AECAAE";
const TERRA = "#C4714E";

// ─── Hero ──────────────────────────────────────────────────────────────────────
function AriseHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 80% 40%, ${SAGE}0d 0%, transparent 60%),
                       radial-gradient(ellipse 40% 50% at 15% 70%, ${TERRA}08 0%, transparent 55%)`,
        }}
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10">
        {[1, 0.6, 0.3].map((opacity, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${SAGE}`,
              transform: `scale(${0.6 + i * 0.2})`,
              opacity,
              animation: `spin-slow ${20 + i * 8}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <Image
                src="/arise-logo.png"
                alt="ARISE"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
                ARISE — By RS Digital Labs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Before the world speaks to you,{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${SAGE}, ${TERRA})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                speak to yourself.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-4 max-w-lg"
            >
              One affirmation, three times, ten seconds. That's your morning
              ritual with ARISE.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-slate-500 text-sm leading-relaxed mb-10 max-w-md"
            >
              Say it. Mean it. Begin. The words you give yourself in the
              first moments of the day become the lens through which you see
              the rest of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-not-allowed select-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
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
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-not-allowed select-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <Link href="/arise/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/arise/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/arise/support" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                Support
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end items-center h-[540px]"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  { number: "01", title: "Unlock your phone", desc: "ARISE knows when you pick up your phone for the first time each morning. No alarm needed — your own routine is the trigger." },
  { number: "02", title: "Read your affirmation", desc: "A single, carefully chosen statement greets you. Tap the button, say it aloud. Three times. The voice matters — it's yours." },
  { number: "03", title: "Begin your day", desc: "That's it. Ten seconds. Your streak grows, your intention is set, and you carry that statement into everything that follows." },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${SAGE}05 0%, transparent 65%)` }}
      />
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${SAGE})` }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
              How It Works
            </span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${SAGE})` }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Three steps. Ten seconds.{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${SAGE}, ${TERRA})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every morning.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-full w-6 h-px z-10 -translate-y-1/2"
                  style={{ background: `linear-gradient(to right, ${SAGE}40, transparent)` }}
                />
              )}
              <div
                className="rounded-2xl p-7 h-full transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="text-4xl font-bold font-mono mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${SAGE}, ${TERRA})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why ARISE ─────────────────────────────────────────────────────────────────
const whyPoints = [
  {
    title: "Intentional, not automatic",
    desc: "You choose your categories. ARISE adapts your affirmations to what actually matters to you right now.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke={SAGE} strokeWidth="1.5"><path d="M9 3v12M3 9h12" /><circle cx="9" cy="9" r="7" /></svg>
    ),
  },
  {
    title: "Built for streaks, not guilt",
    desc: "The streak exists to celebrate consistency, not punish breaks. Premium users can shield their streak on rough mornings.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke={SAGE} strokeWidth="1.5"><path d="M9 1l2 5.5H17L12.5 10l1.7 5.5L9 12.5 4.8 15.5l1.7-5.5L2 6.5h6z" /></svg>
    ),
  },
  {
    title: "Ten seconds, not ten minutes",
    desc: "No journaling. No meditation timer. No guided content to sit through. ARISE respects your morning.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke={SAGE} strokeWidth="1.5"><path d="M3 9a6 6 0 1 0 12 0A6 6 0 0 0 3 9z" /><path d="M9 6v3l2 2" /></svg>
    ),
  },
];

function WhyArise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${SAGE})` }} />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
                Why ARISE
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              What you say in the first minute matters most.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 leading-relaxed mb-4"
            >
              The first thing your brain hears each morning shapes how you
              interpret the day. Most of us fill that moment with
              notifications, news, and noise that has nothing to do with us.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-slate-500 text-sm leading-relaxed"
            >
              ARISE interrupts that pattern with one small act: your own
              words, spoken back to yourself. That's the leverage point.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            {whyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${SAGE}12` }}
                >
                  <div className="w-[18px] h-[18px]">{point.icon}</div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{point.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────
const categories = ["Self-Worth", "Confidence", "Abundance", "Health", "Inner Peace", "Career", "Love & Relationships", "Creativity", "Resilience", "Gratitude", "Spirituality", "Motherhood", "Purpose"];

function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 px-6">
      <div className="relative max-w-4xl mx-auto text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] uppercase block mb-4"
          style={{ color: SAGE }}
        >
          Affirmation Categories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Pick what speaks to you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-slate-500 text-sm mb-10 max-w-md mx-auto"
        >
          Choose one or several. ARISE rotates affirmations across your
          selected categories each day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 justify-center"
        >
          {categories.map((cat, i) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                border: `1px solid ${i % 3 === 0 ? SAGE + "50" : "rgba(255,255,255,0.1)"}`,
                color: i % 3 === 0 ? SAGE : "rgba(255,255,255,0.5)",
                background: i % 3 === 0 ? `${SAGE}0f` : "rgba(255,255,255,0.02)",
              }}
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  { title: "Daily affirmation", desc: "A fresh statement each morning drawn from the categories you've chosen. Curated for clarity, not cliché.", free: true },
  { title: "Streak tracking", desc: "Watch your daily practice grow into a habit. Your streak is visible, but never used against you.", free: true },
  { title: "Unlock detection", desc: "ARISE appears when you first pick up your phone in the morning. No alarm, no reminder, no friction.", free: true },
  { title: "Custom affirmations", desc: "Write your own statements in your own words. Your voice is the most powerful one in the room.", free: false },
  { title: "Streak Shield", desc: "Life happens. A streak shield protects your progress on the days that genuinely get away from you.", free: false },
  { title: "All categories", desc: "Unlock every affirmation category, including new ones added over time. One subscription, always up to date.", free: false },
];

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${TERRA})` }} />
            <span className="text-xs font-mono tracking-[0.3em] text-slate-500 uppercase">Features</span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${TERRA})` }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Everything you need.{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${TERRA}, ${SAGE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nothing you don't.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-7"
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${f.free ? SAGE : TERRA}18` }}
            >
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.desc}</p>
              <span
                className="text-[10px] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: f.free ? `${SAGE}12` : `${TERRA}12`,
                  color: f.free ? SAGE : TERRA,
                  border: `1px solid ${f.free ? SAGE : TERRA}30`,
                }}
              >
                {f.free ? "Free" : "Premium"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Premium ──────────────────────────────────────────────────────────────────
const premiumPerks = [
  "Write unlimited custom affirmations in your own words",
  "Access every affirmation category",
  "Streak Shield to protect your progress",
  "All future premium features included",
  "Cancel anytime. No commitment required.",
];

const plans = [
  { name: "Monthly", period: "Billed monthly", price: "$4.99", per: "per month" },
  { name: "3 Months", period: "Billed every 3 months", price: "$11.99", per: "$4.00/month" },
  { name: "Annual", period: "Billed yearly · Save 42%", price: "$34.99", per: "$2.92/month", popular: true },
];

function Premium() {
  const [selected, setSelected] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${SAGE}06 0%, transparent 70%)` }}
      />
      <div className="relative max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${SAGE}25` }}
        >
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${SAGE}12 0%, transparent 65%)` }}
          />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill={SAGE}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
                  Go Premium
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                One subscription.{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${SAGE}, ${TERRA})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Unlimited intention.
                </span>
              </h2>
              <div className="flex flex-col gap-3">
                {premiumPerks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${SAGE}15` }}
                    >
                      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-3 mb-5">
                {plans.map((plan, i) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelected(i)}
                    className="rounded-2xl p-5 flex items-center justify-between cursor-pointer transition-all duration-200 text-left"
                    style={{
                      border: `1.5px solid ${selected === i ? SAGE : "rgba(255,255,255,0.1)"}`,
                      background: selected === i ? `${SAGE}0f` : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ border: `1.5px solid ${selected === i ? SAGE : "rgba(255,255,255,0.2)"}` }}
                      >
                        {selected === i && <div className="w-2 h-2 rounded-full" style={{ background: SAGE }} />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                          {plan.name}
                          {plan.popular && (
                            <span
                              className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{ background: SAGE, color: "#08091a" }}
                            >
                              Popular
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-slate-500">{plan.period}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-base font-bold text-white">{plan.price}</p>
                      <p className="text-xs text-slate-500">{plan.per}</p>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Subscriptions auto-renew. Cancel anytime in your App Store or
                Google Play settings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Is ARISE free to use?", a: "Yes. When ARISE launches, it will be free to download and use. The free version includes a daily affirmation, streak tracking, and access to a curated selection of categories. Premium unlocks custom affirmations, all categories, Streak Shield, and future features." },
  { q: "How does ARISE know when I wake up?", a: "ARISE uses your phone's unlock detection to appear in the morning window (4AM–4PM). On Android, it detects your first phone unlock of the day. On iOS, it activates when the app comes to the foreground after your morning notification tap. There's no GPS, no personal data collected — it simply listens for your phone to wake up." },
  { q: "Can I choose my own affirmations?", a: "Yes — with ARISE Premium. Write unlimited affirmations in your own words, and they'll appear alongside curated ones in your daily rotation." },
  { q: "What happens if I miss a day?", a: "Your streak resets to zero — but you can always start again. Premium users can use a Streak Shield on days when life gets in the way. The streak is there to encourage you, not make you feel bad." },
  { q: "How does billing work for Premium?", a: "Premium is a subscription that auto-renews at the end of each billing period (monthly, 3-month, or annual). You can cancel anytime from your App Store or Google Play account settings." },
  { q: "Is ARISE available on Android?", a: "Yes. ARISE is available on both iOS (App Store) and Android (Google Play). All features work across both platforms, including Premium." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="relative max-w-3xl mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${SAGE})` }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
              FAQ
            </span>
            <div className="h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${SAGE})` }} />
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

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.06 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                style={{
                  background: open === i ? `${SAGE}08` : "rgba(255,255,255,0.025)",
                  border: `1px solid ${open === i ? `${SAGE}30` : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white text-base">{faq.q}</span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                    style={{ background: `${SAGE}12`, transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                      <path d="M6 2v8M2 6h8" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" />
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

// ─── Download CTA ─────────────────────────────────────────────────────────────
function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${SAGE}08 0%, transparent 70%)` }}
      />
      <div className="relative max-w-xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-8"
          style={{ border: "1px solid rgba(138,175,142,0.2)" }}
        >
          <Image src="/arise-logo.png" alt="ARISE" width={80} height={80} style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Your morning starts here.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 mb-10"
        >
          Free to download when we launch. No account required. Ten seconds. Every morning.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link href="/arise/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
            Privacy Policy
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/arise/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
            Terms of Service
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/arise/support" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
            Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArisePage() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main style={{ background: "#020208" }}>
        <AriseHero />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <WhyArise />
        <Categories />
        <div className="section-divider" />
        <Features />
        <div className="section-divider" />
        <Premium />
        <div className="section-divider" />
        <FAQ />
        <DownloadCTA />
        <FooterSection formVariant="app" />
      </main>
    </>
  );
}
