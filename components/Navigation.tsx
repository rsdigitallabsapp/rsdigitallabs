"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toHome = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          scrolled ? "nav-glass-scrolled rounded-2xl mx-4 sm:mx-8" : ""
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href={toHome("#hero")} className="flex items-center cursor-pointer group flex-shrink-0">
            <Image
              src="/logo-lockup.png"
              alt="RS Digital Labs"
              width={171}
              height={100}
              className="w-[92px] sm:w-[160px] h-auto transition-all duration-300 group-hover:opacity-80"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={toHome(link.href)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: CTA + menu button */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0">
            <a
              href={toHome("#footer")}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-white cursor-pointer whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
            >
              Start
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full glass cursor-pointer"
            >
              <div className="w-5 flex flex-col items-center gap-[5px]">
                <span
                  className="block w-5 h-[1.5px] bg-white transition-transform duration-300"
                  style={menuOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined}
                />
                <span
                  className="block w-5 h-[1.5px] bg-white transition-opacity duration-200"
                  style={menuOpen ? { opacity: 0 } : undefined}
                />
                <span
                  className="block w-5 h-[1.5px] bg-white transition-transform duration-300"
                  style={menuOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="nav-glass-scrolled rounded-2xl mt-3 p-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={toHome(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-3 text-base text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
