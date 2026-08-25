"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

const SAGE = "#8AAF8E";
const SUPPORT_EMAIL = "support@rsdigitallabs.com";

type FaqItem = { q: string; a: React.ReactNode; keywords: string };
type FaqSection = { title: string; items: FaqItem[] };

const faqSections: FaqSection[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I set up ARISE for the first time?",
        keywords: "getting started setup first time",
        a: (
          <ol className="space-y-3 list-none">
            {[
              "Open ARISE. You'll be guided through a short setup: choose the affirmation categories that speak to you.",
              "Grant microphone and notification permissions when prompted. Both can be revoked later in Settings.",
              "That's it. Tomorrow morning, ARISE will be waiting for you when you unlock your phone.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 mt-0.5"
                  style={{ background: SAGE, color: "#08091a" }}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        ),
      },
      {
        q: "How do I change my affirmation categories?",
        keywords: "categories change affirmations choose",
        a: 'Open the app, go to Settings, then tap "Edit Categories." Select any combination of categories. Your affirmations will update starting the next day.',
      },
      {
        q: "Why does ARISE need microphone access?",
        keywords: "microphone permission speech recognition",
        a: "ARISE listens for you to say your affirmation aloud — that's the practice. Speech recognition confirms you've said it three times. Your voice is never recorded or sent anywhere; recognition happens entirely on your device. You can deny the permission and tap manually instead.",
      },
      {
        q: "How do notifications work?",
        keywords: "notifications morning reminder",
        a: "ARISE sends a local morning reminder at the time you specify during setup. This notification is scheduled on your device — we don't operate a notification server, and your notification time is never sent to us. You can change your reminder time in Settings, or turn notifications off entirely in your phone's Settings app.",
      },
    ],
  },
  {
    title: "Premium & Subscriptions",
    items: [
      {
        q: "What's included in ARISE Premium?",
        keywords: "premium subscribe upgrade plans price cost",
        a: "Premium includes: unlimited custom affirmations in your own words, access to all affirmation categories, Streak Shield (protect your streak on missed days), and all future premium features at no additional charge.",
      },
      {
        q: "How do I cancel my subscription?",
        keywords: "cancel subscription cancel premium stop billing",
        a: (
          <div className="space-y-3">
            <p>
              <strong className="text-slate-300">iOS:</strong> Open Settings → tap your name →
              Subscriptions → ARISE → Cancel Subscription. Or visit{" "}
              <a
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                apps.apple.com/account/subscriptions
              </a>
              .
            </p>
            <p>
              <strong className="text-slate-300">Android:</strong> Open Google Play → tap your profile →
              Payments &amp; subscriptions → Subscriptions → ARISE → Cancel.
            </p>
          </div>
        ),
      },
      {
        q: "Can I get a refund?",
        keywords: "refund money back purchase billing",
        a: (
          <>
            All purchases are handled by Apple or Google. For iOS refunds, visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              reportaproblem.apple.com
            </a>
            . For Android refunds, visit your Google Play order history. We cannot process refunds
            directly, but we're happy to help you navigate the process — email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
              {SUPPORT_EMAIL}
            </a>
            .
          </>
        ),
      },
      {
        q: "I switched phones. How do I restore my purchase?",
        keywords: "restore purchase new phone reinstall",
        a: "Install ARISE on your new phone and sign in with the same Apple ID or Google account you used to subscribe. Open the app, go to Settings → Premium → Restore Purchases. Your subscription will be re-activated automatically.",
      },
      {
        q: "Can I share my subscription with family?",
        keywords: "family sharing share subscription",
        a: "ARISE Premium is currently a personal subscription and does not support Family Sharing. Each person who wants Premium features will need their own subscription.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        q: "The app isn't working properly. What should I try?",
        keywords: "app not working crash bug broken",
        a: (
          <ol className="space-y-3 list-none">
            {[
              "Force-close the app and reopen it.",
              "Check that you're on the latest version of ARISE in the App Store or Google Play.",
              "Restart your phone.",
              <>
                If the issue persists, email us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT_EMAIL}
                </a>{" "}
                with your device model and OS version.
              </>,
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 mt-0.5"
                  style={{ background: SAGE, color: "#08091a" }}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        ),
      },
      {
        q: "My streak disappeared. Can it be restored?",
        keywords: "streak lost reset broken wrong",
        a: (
          <>
            Streaks are stored locally on your device and cannot be restored from the cloud if the app is
            deleted or the data is cleared. If you believe a streak was lost due to a bug (not a missed
            day), email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
              {SUPPORT_EMAIL}
            </a>{" "}
            and we'll investigate.
          </>
        ),
      },
      {
        q: "I'm not getting my morning reminder.",
        keywords: "notification not showing up morning reminder",
        a: "Check that ARISE has notification permission: go to your phone's Settings → Notifications → ARISE and make sure notifications are enabled. Also check that Do Not Disturb / Focus Mode isn't blocking the notification. If the issue continues, delete and re-grant notification permission inside the ARISE app via Settings → Notifications.",
      },
      {
        q: "Speech recognition isn't detecting my voice.",
        keywords: "speech recognition microphone not detecting voice",
        a: "Make sure the microphone permission is granted (Settings → Privacy & Security → Microphone → ARISE). Speak clearly and at normal volume with the phone held naturally. If you're in a noisy environment, move somewhere quieter or tap the count buttons manually — the app works either way.",
      },
      {
        q: "ARISE isn't appearing when I unlock my phone (Android).",
        keywords: "android unlock screen not appearing",
        a: 'Some Android devices restrict apps from launching on unlock. Go to your phone\'s Settings → Apps → ARISE → Battery → and make sure "Unrestricted" or "No restrictions" is selected. On some manufacturers (Samsung, Xiaomi, Oppo), you may also need to disable battery optimization specifically for ARISE. Contact us if you\'re unsure what setting applies to your device.',
      },
    ],
  },
];

const contactCards = [
  {
    title: "Email us",
    desc: "For general questions, feedback, and anything else. We'll get back to you within one business day.",
    cta: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    title: "Subscription help",
    desc: "For refunds and subscription cancellations, contact Apple or Google directly — they process all payments.",
    cta: "Apple: reportaproblem.apple.com",
    href: "https://reportaproblem.apple.com",
  },
  {
    title: "Response time",
    desc: "We aim to respond to all support requests within one business day (Monday–Friday, Manila time).",
    cta: "Send a message",
    href: `mailto:${SUPPORT_EMAIL}`,
  },
];

export default function AriseSupportPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return faqSections;
    return faqSections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) => item.q.toLowerCase().includes(q) || item.keywords.includes(q)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: "#020208" }}>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${SAGE}12 0%, transparent 70%)` }}
          />
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image src="/arise-logo.png" alt="ARISE" width={24} height={24} className="rounded-lg" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: SAGE }}>
                Support
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              How can we help?
            </h1>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Find answers below or reach out directly. We read every message and respond within one
              business day.
            </p>
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" strokeWidth={2} />
                <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for an answer..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-white placeholder:text-slate-600 outline-none transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-7 text-center glass"
              >
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-5">{card.desc}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block text-xs font-medium text-white px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-8">
          <div className="max-w-3xl mx-auto space-y-14">
            {filteredSections.length === 0 && (
              <p className="text-center text-slate-500 text-sm">No results for &ldquo;{query}&rdquo;.</p>
            )}
            {filteredSections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-lg font-bold text-white mb-4 pb-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => {
                    const id = `${section.title}-${item.q}`;
                    const isOpen = open === id;
                    return (
                      <motion.div key={id}>
                        <button
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                          style={{
                            background: isOpen ? `${SAGE}08` : "rgba(255,255,255,0.025)",
                            border: `1px solid ${isOpen ? `${SAGE}30` : "rgba(255,255,255,0.06)"}`,
                          }}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-medium text-white text-sm">{item.q}</span>
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                              style={{ background: `${SAGE}12`, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                            >
                              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                                <path d="M6 2v8M2 6h8" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="text-slate-400 text-sm leading-relaxed mt-4">{item.a}</div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact bottom */}
        <section className="px-6 pb-32 pt-12">
          <div className="max-w-2xl mx-auto rounded-3xl p-12 text-center" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${SAGE}25` }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Still need help?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We read every message and get back to you within one business day. Tell us what's happening
              and we'll sort it out.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: SAGE, color: "#08091a" }}
            >
              Email us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <p className="text-slate-600 text-xs mt-4">{SUPPORT_EMAIL} · Response within 1 business day</p>
          </div>
          <div className="text-center mt-8">
            <Link href="/arise" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
              ← Back to ARISE
            </Link>
          </div>
        </section>
      </main>
      <FooterSection formVariant="none" />
    </>
  );
}
