"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { workItems } from "@/components/portfolio/work-items";

/**
 * Touch fallback for the desktop reveal canvas: a native CSS scroll-snap
 * carousel. All content is always visible per slide — no fog mechanic here,
 * this is a usability fallback rather than a recreation of the cursor effect.
 */
export function WorkRevealMobile() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.min(workItems.length - 1, Math.max(0, index)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mb-12">
      <p className="text-center text-slate-500 text-sm mb-6">
        Swipe to explore the work.
      </p>

      <div
        ref={trackRef}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-2"
      >
        {workItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="snap-center shrink-0 w-[85vw] max-w-sm rounded-xl overflow-hidden active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            <div className="relative h-64 rounded-xl overflow-hidden mb-5" style={{ background: "rgba(0,0,0,0.25)" }}>
              {item.preview}
              <div
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
                style={{ background: "rgba(2,2,8,0.8)", border: "1px solid rgba(255,255,255,0.2)", color: item.color }}
              >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: item.color }} />
                {item.status}
              </div>
            </div>
            <div className="text-center px-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">{item.kind}</p>
              <h3 className="text-xl font-bold mb-2 tracking-tight" style={{ color: "var(--ink)" }}>{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {workItems.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${item.title}`}
            aria-current={active === i}
            className="cursor-pointer p-1.5"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: active === i ? 18 : 6,
                height: 6,
                background: active === i ? "#7C3AED" : "rgba(20,19,43,0.18)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
