"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { AppInquiryForm } from "@/components/sections/AppInquiryForm";

const links = {
  Work: [
    { label: "ARISE", href: "/arise" },
    { label: "CHIQ", href: "https://chiqdating.com" },
    { label: "Plannie", href: "/plannie" },
    { label: "OLIVIA", href: "#work" },
  ],
  Studio: [
    { label: "Website", href: "/website" },
    { label: "App", href: "/app" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
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

type FormVariant = "website" | "app" | "general" | "none";

export function FooterSection({ formVariant = "website" }: { formVariant?: FormVariant }) {
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
        {formVariant !== "none" && (
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-20 scroll-mt-24"
          >
            {formVariant === "general" && (
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  What are you looking{" "}
                  <span className="gradient-text">to build?</span>
                </h2>
                <p className="text-slate-300 max-w-md mx-auto mb-10">
                  Tell us whether you need a website or an app, and we'll
                  point you to the right form.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <Link
                    href="/website#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white cursor-pointer transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      boxShadow: "0 0 40px rgba(168,85,247,0.4)",
                    }}
                  >
                    Discuss a Website
                  </Link>
                  <Link
                    href="/app#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-200 glass cursor-pointer transition-all duration-300 hover:border-cyan-500/40 hover:text-white"
                  >
                    Discuss an App
                  </Link>
                </div>
                <p className="text-center text-sm text-slate-400 mt-6">
                  Prefer email? Reach us directly at{" "}
                  <a
                    href="mailto:support@rsdigitallabs.com"
                    className="text-slate-200 hover:text-violet-300 transition-colors duration-200"
                  >
                    support@rsdigitallabs.com
                  </a>
                </p>
              </div>
            )}

            {formVariant === "website" && (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Create My{" "}
                    <span className="gradient-text">Website</span>
                  </h2>
                  <p className="text-slate-300 max-w-md mx-auto">
                    Tell us about your business and what you're trying to
                    ship. We'll tell you honestly whether we're the right
                    team for it.
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
              </>
            )}

            {formVariant === "app" && (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Have an app worth{" "}
                    <span className="gradient-text">building?</span>
                  </h2>
                  <p className="text-slate-300 max-w-md mx-auto">
                    Tell us what you're trying to ship — mobile, web, or a
                    custom tool. We'll tell you honestly whether we're the
                    right team for it.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <AppInquiryForm />
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
              </>
            )}
          </motion.div>
        )}

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
