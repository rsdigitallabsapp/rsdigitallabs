import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Delete Account — Plannie by RS Digital Labs",
  description:
    "Learn how to permanently delete your Plannie account and all associated data. Open Plannie → Profile → Settings → Delete Account.",
};

const SUPPORT = "support@rsdigitallabs.com";
const CYAN = "#22D3EE";

const steps = [
  {
    number: "1",
    action: "Open Plannie",
    detail: "Launch the Plannie app on your device.",
  },
  {
    number: "2",
    action: "Go to Profile",
    detail: "Tap the Profile icon in the bottom navigation bar.",
  },
  {
    number: "3",
    action: "Open Settings",
    detail: "Tap the Settings icon in the top right corner of your Profile screen.",
  },
  {
    number: "4",
    action: "Tap Delete Account",
    detail: 'Scroll to the bottom of Settings and tap "Delete Account."',
  },
  {
    number: "5",
    action: "Confirm deletion",
    detail: "Read the confirmation prompt and confirm. Your account will be permanently deleted.",
  },
];

const deletedData = [
  "Account information (name, email, profile picture)",
  "Saved plans and favorite date ideas",
  "App preferences and settings",
  "Associated user content",
  "Authentication records (including Google Sign-In link)",
];

export default function PlannieDeleteAccountPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: "#020208" }}>

        {/* Header */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${CYAN}10 0%, transparent 65%)`,
            }}
          />

          <div className="relative max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm flex-wrap">
              <Link href="/" className="text-slate-600 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5">
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
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: CYAN }}>
                Account & Data Deletion
              </span>
            </div>

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
            <p className="text-slate-400 text-lg leading-relaxed">
              You can permanently delete your Plannie account directly from inside the app.
              No email required — it takes less than a minute.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-32 px-6">
          <div className="max-w-2xl mx-auto space-y-5">

            {/* Quick path banner */}
            <div
              className="rounded-2xl px-7 py-5 flex items-center gap-4 flex-wrap"
              style={{
                background: `${CYAN}0c`,
                border: `1px solid ${CYAN}30`,
              }}
            >
              <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0" fill={CYAN}>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-mono" style={{ color: CYAN }}>
                Open Plannie → Profile → Settings → Delete Account
              </p>
            </div>

            {/* Step-by-step */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="px-8 pt-7 pb-3">
                <h2 className="text-lg font-bold text-white">Step-by-step instructions</h2>
                <p className="text-slate-500 text-sm mt-1">Deletion is done entirely within the app — no web login needed.</p>
              </div>

              <div className="px-8 pb-8 pt-4 space-y-0">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex gap-5">
                    {/* Left: number + connector */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-1">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-mono flex-shrink-0"
                        style={{
                          background: `${CYAN}15`,
                          color: CYAN,
                          border: `1.5px solid ${CYAN}35`,
                        }}
                      >
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1 my-1 min-h-[28px]"
                          style={{ background: `${CYAN}18` }}
                        />
                      )}
                    </div>

                    {/* Right: content */}
                    <div className="pb-6 pt-1 flex-1 min-w-0">
                      <p className="text-white font-semibold text-base leading-tight">{step.action}</p>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What gets deleted */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h2 className="text-lg font-bold text-white mb-2">What gets deleted</h2>
              <p className="text-slate-500 text-sm mb-6">
                The following data is permanently removed when you delete your account:
              </p>
              <ul className="space-y-3">
                {deletedData.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${CYAN}12` }}
                    >
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none">
                        <path d="M2.5 6l2.5 2.5 4.5-5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning */}
            <div
              className="rounded-2xl px-7 py-5 flex items-start gap-4"
              style={{
                background: "rgba(251,113,133,0.06)",
                border: "1px solid rgba(251,113,133,0.22)",
              }}
            >
              <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none">
                <path d="M10 3L2 17h16L10 3z" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 9v4M10 14.5v.5" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-rose-300 font-semibold text-sm">Deletion is permanent</p>
                <p className="text-rose-400/70 text-sm mt-1 leading-relaxed">
                  Once confirmed, all your data is queued for permanent removal within 30 days.
                  This cannot be undone and your account cannot be recovered.
                </p>
              </div>
            </div>

            {/* Support */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: `linear-gradient(135deg, ${CYAN}08, transparent)`,
                border: `1px solid ${CYAN}18`,
              }}
            >
              <h3 className="text-base font-bold text-white mb-1">Need help?</h3>
              <p className="text-slate-500 text-sm mb-5">
                Can't find the option in the app or need us to delete your account manually?
              </p>
              <a
                href={`mailto:${SUPPORT}`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: CYAN }}
              >
                {SUPPORT}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Related links */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
              <Link href="/plannie" className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200">
                ← Back to Plannie
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/plannie/privacy" className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/plannie/terms" className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200">
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
