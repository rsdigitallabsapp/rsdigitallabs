import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import Link from "next/link";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  badge: string;
  badgeColor?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  appName?: string;
  sections: LegalSection[];
  backHref?: string;
  backLabel?: string;
}

export function LegalPage({
  badge,
  badgeColor = "#A855F7",
  title,
  titleAccent,
  subtitle,
  lastUpdated,
  effectiveDate,
  appName,
  sections,
  backHref = "/",
  backLabel = "Back to Home",
}: LegalPageProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: "#020208" }}>
        {/* Hero header */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${badgeColor}12 0%, transparent 70%)`,
            }}
          />
          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link
                href={backHref}
                className="text-slate-600 hover:text-violet-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </Link>
              {appName && (
                <>
                  <span className="text-slate-700">/</span>
                  <span className="text-slate-600">{appName}</span>
                </>
              )}
              <span className="text-slate-700">/</span>
              <span className="text-slate-500">{badge}</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px w-12"
                style={{
                  background: `linear-gradient(to right, transparent, ${badgeColor})`,
                }}
              />
              <span
                className="text-xs font-mono tracking-[0.3em] uppercase"
                style={{ color: badgeColor }}
              >
                {badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="gradient-text">{titleAccent}</span>
                </>
              )}
            </h1>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-glow" />
                <span className="text-xs font-mono text-slate-400">
                  Last updated: <span className="text-slate-200">{lastUpdated}</span>
                </span>
              </div>
              <div className="glass rounded-xl px-4 py-2.5">
                <span className="text-xs font-mono text-slate-400">
                  Effective: <span className="text-slate-200">{effectiveDate}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents + Content */}
        <section className="pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            {/* TOC */}
            <div className="glass rounded-2xl p-6 mb-10">
              <p className="text-xs font-mono tracking-[0.2em] text-slate-600 uppercase mb-4">
                Table of Contents
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-400 transition-colors duration-200 group"
                    >
                      <span
                        className="text-[10px] font-mono w-6 text-right flex-shrink-0"
                        style={{ color: badgeColor, opacity: 0.6 }}
                      >
                        {s.number}
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {s.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-5">
              {sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="glass rounded-2xl p-8 scroll-mt-24"
                  style={{
                    borderColor: `${badgeColor}15`,
                  }}
                >
                  <div className="flex gap-5 items-start">
                    <span
                      className="text-xs font-mono mt-1 flex-shrink-0 w-6"
                      style={{ color: badgeColor, opacity: 0.5 }}
                    >
                      {s.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-white mb-5">{s.title}</h2>
                      <div className="legal-prose text-slate-400 text-sm leading-7 space-y-4">
                        {s.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact block */}
            <div
              className="mt-10 rounded-2xl p-8 text-center"
              style={{
                background: `linear-gradient(135deg, ${badgeColor}10, transparent)`,
                border: `1px solid ${badgeColor}20`,
              }}
            >
              <p className="text-slate-300 mb-2 font-medium">Questions about this document?</p>
              <p className="text-slate-500 text-sm mb-4">
                Our team is here to help clarify anything in plain language.
              </p>
              <a
                href="mailto:support@rsdigitallabs.com"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: badgeColor }}
              >
                support@rsdigitallabs.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
