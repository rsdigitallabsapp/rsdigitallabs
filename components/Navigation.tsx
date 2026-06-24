"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Apps", href: "#apps" },
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#timeline" },
  { label: "Contact", href: "#footer" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl mx-4 sm:mx-8" : ""
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 cursor-pointer group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 20px rgba(168,85,247,0.4)",
              }}
            >
              <span className="text-white font-bold text-xs tracking-tighter">RS</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight hidden sm:block">
              RS Digital Labs
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
