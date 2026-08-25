"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { InquiryForm } from "@/components/sections/InquiryForm";

const links = {
  Work: [
    { label: "ARISE", href: "/arise" },
    { label: "CHIQ", href: "https://chiqdating.com" },
    { label: "Plannie", href: "/plannie" },
    { label: "OLIVIA", href: "#work" },
  ],
  Studio: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Start a Project", href: "#footer" },
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
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Have a product worth{" "}
              <span className="gradient-text">building?</span>
            </h2>
            <p className="text-slate-300 max-w-md mx-auto">
              Tell us what you're trying to ship — a website, an app, a full
              product. We'll tell you honestly whether we're the right team
              for it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <InquiryForm />
            <p className="text-center text-sm text-slate-400 mt-5">
              Prefer email? Reach us directly at{" "}
              <a
                href="mailto:support@rsdigitallabs.com"
                className="text-slate-200 hover:text-violet-300 transition-colors duration-200"
              >
                support@rsdigitallabs.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-lockup.png"
                alt="RS Digital Labs"
                width={171}
                height={100}
                className="w-[150px] h-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              A product design and development studio. We design, build, and
              ship — for local and small businesses, and for ourselves.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={resolveHref(item.href)}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-300 hover:text-slate-100 text-sm transition-colors duration-200 cursor-pointer"
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
          <p className="text-slate-400 text-sm font-mono">
            © {new Date().getFullYear()} RS Digital Labs. All rights reserved.
          </p>
          <a
            href="mailto:support@rsdigitallabs.com"
            className="text-slate-400 text-xs font-mono hover:text-slate-200 transition-colors duration-200"
          >
            support@rsdigitallabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
