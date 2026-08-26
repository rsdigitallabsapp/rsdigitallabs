"use client";
import { useRef, useSyncExternalStore } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { WorkStaticGrid } from "@/components/sections/WorkStaticGrid";
import { WorkRevealCanvas } from "@/components/portfolio/WorkRevealCanvas";
import { WorkRevealMobile } from "@/components/portfolio/WorkRevealMobile";

type Mode = "static" | "canvas" | "mobile";

const DESKTOP_POINTER_QUERY = "(pointer: fine) and (min-width: 1024px)";

function subscribeToPointerQuery(callback: () => void) {
  const query = window.matchMedia(DESKTOP_POINTER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return window.matchMedia(DESKTOP_POINTER_QUERY).matches;
}

function getPointerServerSnapshot() {
  return false;
}

// Never changes on its own — this subscription exists purely to give
// useSyncExternalStore a hydration-safe way to report "has the client
// finished mounting yet" (server/first-paint snapshot is false, client
// snapshot is true), without a local effect+setState.
function subscribeNever() {
  return () => {};
}
function getHydratedSnapshot() {
  return true;
}
function getHydratedServerSnapshot() {
  return false;
}

// The blank reveal canvas only makes sense for someone actively driving a
// mouse — it can't be scanned visually the way a hover-to-preview grid can,
// so a sighted keyboard-only visitor should never be dropped into it. Tab
// is the standard signal used elsewhere (e.g. the WICG focus-visible
// heuristic) for "this visitor is navigating by keyboard." Detection is
// global (any Tab press anywhere on the page, not just inside this section)
// and one-way for the rest of the session — once someone is known to be
// tabbing, we don't want the accessible grid to vanish out from under them
// just because the mouse moved afterward.
let keyboardModalityDetected = false;
let keyboardListenerAttached = false;
const keyboardModalityListeners = new Set<() => void>();

function ensureKeyboardListener() {
  if (keyboardListenerAttached || typeof window === "undefined") return;
  keyboardListenerAttached = true;
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && !keyboardModalityDetected) {
      keyboardModalityDetected = true;
      keyboardModalityListeners.forEach((listener) => listener());
    }
  });
}

function subscribeToKeyboardModality(callback: () => void) {
  ensureKeyboardListener();
  keyboardModalityListeners.add(callback);
  return () => keyboardModalityListeners.delete(callback);
}

function getKeyboardModality() {
  return keyboardModalityDetected;
}

function getKeyboardModalityServerSnapshot() {
  return false;
}

export function SelectedWorkSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  // Reactive, hydration-safe reads of external browser state — no local
  // effect/setState needed. The server snapshot (and first client paint,
  // before either resolves) is always "static": real content, real links,
  // no JS required. Once mounted, these upgrade the experience in place.
  const isDesktopPointer = useSyncExternalStore(
    subscribeToPointerQuery,
    getPointerSnapshot,
    getPointerServerSnapshot
  );
  const usingKeyboard = useSyncExternalStore(
    subscribeToKeyboardModality,
    getKeyboardModality,
    getKeyboardModalityServerSnapshot
  );
  const hydrated = useSyncExternalStore(subscribeNever, getHydratedSnapshot, getHydratedServerSnapshot);

  const mode: Mode = !hydrated
    ? "static"
    : prefersReducedMotion || usingKeyboard
      ? "static"
      : isDesktopPointer
        ? "canvas"
        : "mobile";

  return (
    <section id="work" className="relative py-32 px-6" style={{ background: "var(--paper)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
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
              Selected Work
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Websites and apps,{" "}
            <span className="gradient-text-light">built the same way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-slate-300 text-lg max-w-xl mx-auto"
          >
            Everything below was genuinely designed and built by RS Digital
            Labs — real product work and real concept design, no
            outsourcing, no feature theater.
          </motion.p>
        </div>

        {mode === "static" && <WorkStaticGrid />}
        {mode === "mobile" && <WorkRevealMobile />}
      </div>

      {/* The desktop reveal canvas breaks out of the centered max-w-6xl
          column deliberately — it needs to feel like the whole section is
          the interactive surface, not a box floating inside it. */}
      {mode === "canvas" && <WorkRevealCanvas />}

      <div className="max-w-6xl mx-auto">
        {/* Path links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/website"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm glass-light cursor-pointer transition-all duration-300 hover:border-violet-500/50"
            style={{ color: "var(--ink)" }}
          >
            View all website work
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/app"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm glass-light cursor-pointer transition-all duration-300 hover:border-violet-500/50"
            style={{ color: "var(--ink)" }}
          >
            View all app work
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
