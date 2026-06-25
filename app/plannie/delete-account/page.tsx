import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Delete Account — Plannie by RS Digital Labs",
  description:
    "Learn how to permanently delete your Plannie account and all associated data from within the app.",
};

const SUPPORT = "support@rsdigitallabs.com";
const CYAN = "#22D3EE";

const steps = [
  { number: "1", label: "Open Plannie" },
  { number: "2", label: "Go to Profile" },
  { number: "3", label: "Open Settings" },
  { number: "4", label: "Tap Delete Account" },
  { number: "5", label: "Confirm deletion" },
];

const deletedData = [
  "Account information",
  "Saved plans",
  "Preferences",
  "Associated user content",
  "Authentication records",
];

export default function PlannieDeleteAccountPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: "#020208" }}>
        {/* Hero header */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${CYAN}10 0%, transparent 65%)`,
            }}
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm flex-wrap">
              <Link
                href="/"
                className="text-slate-600 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                RS Digital Labs
              </Link>
              <span className="text-slate-700">/</span>
              <Link href="/plannie" className="text-slate-600 hover:text-cyan-400 transition-colors duration-200">
                Plannie
              </Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-500">Delete Account</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: `linear-gradient(to right, transparent, ${CYAN})` }} />
              <span
                className="text-xs font-mono tracking-[0.3em] uppercase"
                style={{ color: CYAN }}
              >
                Account & Data Deletion
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Plannie Account &{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${CYAN}, #FB7185)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Data Deletion
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              You can permanently delete your Plannie account and all associated data directly from
              within the app. This action is immediate and cannot be undone.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-32 px-6">
          <div className="max-w-3xl mx-auto space-y-5">

            {/* How to delete */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${CYAN}15`,
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">How to Delete Your Account</h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Account deletion is handled directly within the app. Follow these steps:
              </p>

              {/* Steps */}
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex items-center gap-5">
                    {/* Number + line */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-mono"
                        style={{
                          background: `${CYAN}15`,
                          color: CYAN,
                          border: `1px solid ${CYAN}30`,
                        }}
                      >
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px h-6 mt-1"
                          style={{ background: `${CYAN}20` }}
                        />
                      )}
                    </div>
                    {/* Label */}
                    <p className="text-slate-200 text-base font-medium">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What gets deleted */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">What Data Is Deleted</h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                When you delete your account, the following data is permanently removed:
              </p>

              <ul className="space-y-3">
                {deletedData.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${CYAN}12` }}
                    >
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none">
                        <path
                          d="M2.5 6l2.5 2.5 4.5-5"
                          stroke={CYAN}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Warning */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-3"
                style={{
                  background: "rgba(251,113,133,0.06)",
                  border: "1px solid rgba(251,113,133,0.2)",
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="none"
                >
                  <path
                    d="M10 3L2 17h16L10 3z"
                    stroke="#FB7185"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9v4M10 14.5v.5"
                    stroke="#FB7185"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-sm text-rose-300 leading-relaxed">
                  <strong>Deletion is permanent and cannot be undone.</strong> Once your account is
                  deleted, all data is queued for permanent removal within 30 days and cannot be
                  recovered.
                </p>
              </div>
            </div>

            {/* Need help */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: `linear-gradient(135deg, ${CYAN}08, transparent)`,
                border: `1px solid ${CYAN}20`,
              }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${CYAN}15` }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    stroke={CYAN}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Need Help?</h3>
              <p className="text-slate-400 text-sm mb-5 max-w-sm mx-auto">
                If you have trouble deleting your account or need assistance, our team is here to help.
              </p>
              <a
                href={`mailto:${SUPPORT}`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: CYAN }}
              >
                {SUPPORT}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Related links */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <Link
                href="/plannie"
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                ← Back to Plannie
              </Link>
              <span className="text-slate-700">·</span>
              <Link
                href="/plannie/privacy"
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-700">·</span>
              <Link
                href="/plannie/terms"
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
