"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const apps = [
  {
    id: "arise",
    name: "ARISE",
    tagline: "Before the world speaks to you, speak to yourself.",
    description:
      "Your morning affirmation ritual. One statement, spoken aloud, three times, in under ten seconds.",
    color: "#8AAF8E",
    glowColor: "rgba(138,175,142,0.3)",
    accentBg: "rgba(138,175,142,0.08)",
    status: "Live",
    href: "/arise",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="10" stroke="#8AAF8E" strokeWidth="1.5" />
        <path d="M20 14v6l4 3" stroke="#8AAF8E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8l1.5 1.5M28 8l-1.5 1.5M12 32l1.5-1.5M28 32l-1.5-1.5" stroke="#8AAF8E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "chiq",
    name: "CHIQ",
    tagline: "AI-powered conversations, elevated.",
    description:
      "A next-generation AI chat experience designed for clarity, speed, and genuine usefulness. Not a toy — a tool.",
    color: "#A855F7",
    glowColor: "rgba(168,85,247,0.3)",
    accentBg: "rgba(168,85,247,0.08)",
    status: "Live",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M12 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="#A855F7" />
        <line x1="20" y1="23" x2="20" y2="28" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "plannie",
    name: "Plannie",
    tagline: "Plan smarter. Execute faster.",
    description:
      "Intelligent task planning that learns how you work and removes every friction point between an idea and its completion.",
    color: "#22D3EE",
    glowColor: "rgba(34,211,238,0.3)",
    accentBg: "rgba(34,211,238,0.08)",
    status: "Live",
    href: "/plannie",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="#22D3EE" strokeWidth="1.5" />
        <line x1="14" y1="16" x2="26" y2="16" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="20" x2="22" y2="20" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="24" x2="20" y2="24" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "olivia",
    name: "OLIVIA",
    tagline: "Your intelligent life companion.",
    description:
      "A personal assistant that handles the routine so you can focus on what matters. Proactive, private, and truly helpful.",
    color: "#60A5FA",
    glowColor: "rgba(96,165,250,0.3)",
    accentBg: "rgba(96,165,250,0.08)",
    status: "Live",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="15" r="6" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "future",
    name: "Next",
    tagline: "Something new is on its way.",
    description:
      "The lab never sleeps. New products are in development — marketplace apps and tools that we haven't announced yet.",
    color: "#818CF8",
    glowColor: "rgba(129,140,248,0.3)",
    accentBg: "rgba(129,140,248,0.08)",
    status: "In Development",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="6" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
  },
];

function AppCard({
  app,
  index,
}: {
  app: (typeof apps)[0];
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -18, y: x * 18 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      onClick={() => app.href && router.push(app.href)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? "10px" : "0px"})`,
        transition: hovered ? "transform 0.1s linear, box-shadow 0.3s" : "transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s",
        boxShadow: hovered
          ? `0 0 60px ${app.glowColor}, 0 0 120px ${app.glowColor.replace("0.3", "0.1")}, 0 20px 60px rgba(0,0,0,0.5)`
          : "0 4px 40px rgba(0,0,0,0.3)",
      }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Card background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${app.accentBg}, transparent)`,
          opacity: hovered ? 1 : 0.5,
        }}
      />
      <div className="glass absolute inset-0" />

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${hovered ? app.color + "60" : "rgba(255,255,255,0.08)"}`,
          opacity: 1,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-8">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider"
            style={{
              background: app.accentBg,
              color: app.color,
              border: `1px solid ${app.color}30`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
              style={{ background: app.color }}
            />
            {app.status}
          </div>
          <div style={{ color: app.color }} className="opacity-60 group-hover:opacity-100 transition-opacity">
            {app.icon}
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-3xl font-bold mb-3 tracking-tight transition-all duration-300"
          style={{ color: hovered ? app.color : "#F1F5F9" }}
        >
          {app.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-medium text-slate-300 mb-4 tracking-wide">
          {app.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed">
          {app.description}
        </p>

        {/* CTA */}
        <div
          className="mt-8 flex items-center gap-2 text-sm font-semibold transition-all duration-300"
          style={{ color: hovered ? app.color : "rgba(255,255,255,0.3)" }}
        >
          Learn more
          <svg className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function AppsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section id="apps" className="relative py-32 px-6">
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
              Our Products
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Apps built for{" "}
            <span className="gradient-text">real people.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-slate-400 text-lg max-w-xl mx-auto"
          >
            Every product we ship solves a genuine problem. No bloat, no
            feature theater — just tools that work.
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
