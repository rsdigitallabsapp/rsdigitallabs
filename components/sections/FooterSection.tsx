"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const links = {
  Products: [
    { label: "ARISE", href: "/arise" },
    { label: "CHIQ", href: "#apps" },
    { label: "Plannie", href: "/plannie" },
    { label: "OLIVIA", href: "#apps" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Roadmap", href: "#timeline" },
    { label: "Contact", href: "mailto:chiqui.santiago@gmail.com" },
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

const socials = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function FooterSection() {
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
            Have a problem worth{" "}
            <span className="gradient-text">solving?</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            We're always thinking about what to build next. If you've spotted a
            gap, we want to hear about it.
          </p>
          <a
            href="mailto:chiqui.santiago@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 40px rgba(168,85,247,0.4)",
            }}
          >
            Get in Touch
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
              Building apps that make life easier, one product at a time.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-slate-600 hover:text-violet-400 transition-colors duration-200 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
                      href={item.href}
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
