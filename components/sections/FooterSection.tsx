"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = {
  Work: [
    { label: "ARISE", href: "/arise" },
    { label: "CHIQ", href: "#work" },
    { label: "Plannie", href: "/plannie" },
    { label: "OLIVIA", href: "#work" },
  ],
  Studio: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Roadmap", href: "#timeline" },
    { label: "Start a Project", href: "mailto:support@rsdigitallabs.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "ARISE Privacy", href: "/arise/privacy" },
    { label: "ARISE Terms", href: "/arise/terms" },
    { label: "ARISE Support", href: "/arise/support" },
    { label: "Plannie Privacy", href: "/plannie/privacy" },
    { label: "Plannie Terms", href: "/plannie/terms" },
    { label: "Delete Account", href: "/plannie/delete-account" },
    { label: "CHIQ Privacy", href: "/chiq/privacy-policy" },
  ],
};

export function FooterSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  return (
    <footer id="footer" className="relative pt-24 pb-12 px-6 overflow-hidden">
      {/* Divider */}
      <div className="section-divider mb-20" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Have a product worth{" "}
            <span className="gradient-text">building?</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Tell us what you're trying to ship — a website, an app, a full
            product. We'll tell you honestly whether we're the right team
            for it.
          </p>
          <a
            href="mailto:support@rsdigitallabs.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 40px rgba(168,85,247,0.4)",
            }}
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-transparent.png"
                alt="RS Digital Labs"
                width={150}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A product design and development studio. We design, build, and
              ship — for ourselves and for our clients.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-mono tracking-[0.2em] text-slate-600 uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={resolveHref(item.href)}
                      className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-sm font-mono">
            © {new Date().getFullYear()} RS Digital Labs. All rights reserved.
          </p>
          <a
            href="mailto:support@rsdigitallabs.com"
            className="text-slate-700 text-xs font-mono hover:text-slate-400 transition-colors duration-200"
          >
            support@rsdigitallabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
