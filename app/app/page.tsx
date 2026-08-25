"use client";

import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServiceGrid, type ServiceGroup } from "@/components/sections/ServiceGrid";
import { AppsSection } from "@/components/sections/AppsSection";

// ─── Hero ───────────────────────────────────────────────────────────────────
function AppHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">Apps</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Apps built to launch,{" "}
          <span className="gradient-text">not just demo.</span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
          Mobile, web, or internal tools — designed and built by the same
          team that ships its own products, end to end.
        </p>
      </div>
    </section>
  );
}

// ─── Services (app variant) ────────────────────────────────────────────────
const appServices: ServiceGroup[] = [
  {
    title: "Design",
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
    title: "Build",
    color: "#22D3EE",
    accentBg: "rgba(34,211,238,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M11 10L5 16L11 22" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10L27 16L21 22" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 7L14 25" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    items: ["Mobile apps — iOS & Android", "Web apps & dashboards", "Portals & marketplaces", "Custom business tools"],
  },
  {
    title: "Grow",
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

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AppPage() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main style={{ background: "#020208" }}>
        <AppHero />
        <div className="section-divider" />
        <ServiceGrid
          eyebrow="What We Build"
          heading={<>From first sketch<span className="gradient-text"> to app-store-ready.</span></>}
          intro="The same process behind our own apps, brought to yours — design, build, and the ongoing care that keeps it improving."
          services={appServices}
          closingText={
            <>
              No outsourcing, no bolted-on contractors.{" "}
              <span className="text-white font-medium">
                The team that builds our own apps builds yours.
              </span>
            </>
          }
          closingCtaLabel="Discuss My App"
          closingCtaHref="#contact"
        />
        <div className="section-divider" />
        <AppsSection
          eyebrow="Our Products"
          heading={<>This is what we've built{" "}<span className="gradient-text">with our own hands.</span></>}
          intro="Every product below was designed and built by RS Digital Labs, end to end — from first sketch to app-store-ready, no outsourcing, no bloat, no feature theater."
        />
        <FooterSection formVariant="app" />
      </main>
    </>
  );
}
