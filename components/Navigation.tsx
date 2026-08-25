"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
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
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toHome = (hash: string) => (isHome ? hash : `/${hash}`);

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
          <a href={toHome("#hero")} className="flex items-center cursor-pointer group">
            <Image
              src="/logo-transparent.png"
              alt="RS Digital Labs"
              width={130}
              height={52}
              className="transition-all duration-300 group-hover:opacity-80"
              style={{ objectFit: "contain" }}
              priority
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={toHome(link.href)}
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
