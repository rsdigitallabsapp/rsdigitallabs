"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServiceGrid, type ServiceGroup } from "@/components/sections/ServiceGrid";
import { RestaurantConcept } from "@/components/portfolio/RestaurantConcept";
import { LandscapingConcept } from "@/components/portfolio/LandscapingConcept";
import { MedicalConcept } from "@/components/portfolio/MedicalConcept";

// ─── Hero ───────────────────────────────────────────────────────────────────
function WebsiteHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">Websites</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Websites built to work{" "}
          <span className="gradient-text">as hard as you do.</span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
          A site that looks premium and actually brings customers in the
          door — built for your business, not stitched together from a
          template.
        </p>
      </div>
    </section>
  );
}

// ─── Services (website variant) ────────────────────────────────────────────
const websiteServices: ServiceGroup[] = [
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
    items: ["Marketing & product websites", "Ecommerce & online stores", "Custom CMS integrations"],
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
    items: ["Post-launch iteration", "Performance & analytics/SEO", "Ongoing content updates"],
  },
];

// ─── Industry examples ──────────────────────────────────────────────────────
const industries = [
  {
    name: "Restaurants",
    color: "#C4714E",
    blurb: "A site that gets people in the door — and makes ordering and reserving effortless.",
    features: ["Online menu & ordering", "Table reservations", "Photo gallery", "Google & Yelp integration"],
  },
  {
    name: "Landscaping",
    color: "#8AAF8E",
    blurb: "Show off real work and make it easy for a homeowner to ask for a quote.",
    features: ["Service-area & quote requests", "Before/after project gallery", "Seasonal service listings", "One-tap mobile contact"],
  },
  {
    name: "Medical & Dental",
    color: "#22D3EE",
    blurb: "Clean, trustworthy, and built around getting a patient booked.",
    features: ["Online appointment booking", "Patient intake forms", "Provider bios", "Location & hours"],
  },
];

function IndustrySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">Industry Examples</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Built around how your business actually works.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{ind.blurb}</p>
              <ul className="space-y-2.5">
                {ind.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Selected concepts ──────────────────────────────────────────────────────
function ConceptsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    { name: "Restaurant Concept", node: <RestaurantConcept /> },
    { name: "Landscaping Concept", node: <LandscapingConcept /> },
    { name: "Medical/Dental Concept", node: <MedicalConcept /> },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">Selected Concepts</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
          >
            A few directions we could take yours.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto"
          >
            Illustrative concepts, designed by us to show range — not live
            client work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {concepts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {c.node}
              <p className="mt-4 text-sm font-semibold text-slate-300">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function WebsitePage() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main style={{ background: "#020208" }}>
        <WebsiteHero />
        <div className="section-divider" />
        <ServiceGrid
          eyebrow="What We Build"
          heading={<>Everything a business site<span className="gradient-text"> needs to earn its keep.</span></>}
          intro="From first sketch to a live, working site — design, build, and the ongoing care that keeps it converting."
          services={websiteServices}
          closingText={
            <>
              No cookie-cutter websites. Every project is adapted to the
              business, audience, and goals.{" "}
              <span className="text-white font-medium">
                The team that builds our own apps builds yours.
              </span>
            </>
          }
          closingCtaLabel="Create My Website"
          closingCtaHref="#contact"
        />
        <div className="section-divider" />
        <IndustrySection />
        <div className="section-divider" />
        <ConceptsSection />
        <FooterSection formVariant="website" />
      </main>
    </>
  );
}
