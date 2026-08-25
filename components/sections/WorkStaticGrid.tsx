"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { workItems, type WorkItem } from "@/components/portfolio/work-items";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020208]";

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={item.href}
        target={item.isExternal ? "_blank" : undefined}
        rel={item.isExternal ? "noopener noreferrer" : undefined}
        className={`group block rounded-xl cursor-pointer active:scale-[0.98] transition-transform ${focusRing}`}
      >
        <div
          className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-6"
          style={{ background: "rgba(0,0,0,0.25)" }}
        >
          {item.preview}
          <div
            className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(2,2,8,0.5))" }}
          />
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
            style={{ background: "rgba(2,2,8,0.8)", border: "1px solid rgba(255,255,255,0.2)", color: item.color }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: item.color }} />
            {item.status}
          </div>
        </div>

        <div className="text-center max-w-sm mx-auto">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
            {item.kind}
          </p>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-violet-300">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-violet-300">
            Learn more
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/**
 * The always-real, always-accessible baseline: an SSR-rendered grid of every
 * work item. Used as the initial render for all visitors (so crawlers/no-JS
 * clients get real content), and as the permanent experience for anyone with
 * prefers-reduced-motion set.
 */
export function WorkStaticGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {workItems.map((item, i) => (
        <WorkCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}
