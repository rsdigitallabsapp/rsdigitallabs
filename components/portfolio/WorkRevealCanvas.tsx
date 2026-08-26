"use client";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { workItems } from "@/components/portfolio/work-items";

const DWELL_MS = 320;
const LEAVE_DELAY_MS = 150;
const TRAIL_SPAWN_DISTANCE = 180;
const TRAIL_LIFETIME_MS = 750;

type TrailItem = { id: number; src: string; x: number; y: number; rotate: number };

/**
 * Desktop-pointer-only reveal: the section is otherwise completely blank —
 * no live previews are ever mounted here. Moving the cursor through a
 * project's zone spawns small trailing screenshot thumbnails (that project's
 * own image) which fade out shortly after appearing. Pausing over a zone
 * (or reaching it by keyboard) shows a small tooltip with its title, kind,
 * status, and a real, always-accessible link. Callers are responsible for
 * only rendering this for visitors who are actually driving a mouse — see
 * SelectedWorkSection's mode routing.
 */
export function WorkRevealCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoneRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastTrailPos = useRef<{ x: number; y: number } | null>(null);
  const dwellStart = useRef<Record<string, number>>({});
  const leaveTimer = useRef<number | null>(null);
  const activeZoneRef = useRef<string | null>(null);
  const trailCounter = useRef(0);

  const [activeZone, setActiveZoneState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [trailItems, setTrailItems] = useState<TrailItem[]>([]);

  const setActiveZone = useCallback((id: string | null) => {
    activeZoneRef.current = id;
    setActiveZoneState(id);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let hit: string | null = null;
      for (const item of workItems) {
        const el = zoneRefs.current[item.id];
        if (!el) continue;
        const zr = el.getBoundingClientRect();
        if (e.clientX >= zr.left && e.clientX <= zr.right && e.clientY >= zr.top && e.clientY <= zr.bottom) {
          hit = item.id;
          break;
        }
      }

      if (hit) {
        // Spawn a trailing thumbnail for whichever project the cursor is
        // currently over — throttled by distance moved, same as the
        // original cursor-trail effect.
        let shouldSpawn = true;
        if (lastTrailPos.current) {
          const dx = x - lastTrailPos.current.x;
          const dy = y - lastTrailPos.current.y;
          if (Math.sqrt(dx * dx + dy * dy) < TRAIL_SPAWN_DISTANCE) shouldSpawn = false;
        }
        if (shouldSpawn) {
          lastTrailPos.current = { x, y };
          const item = workItems.find((w) => w.id === hit)!;
          const id = trailCounter.current++;
          const rotate = (Math.random() - 0.5) * 16;
          setTrailItems((prev) => [...prev.slice(-7), { id, src: item.trailImage, x, y, rotate }]);
          window.setTimeout(() => {
            setTrailItems((prev) => prev.filter((it) => it.id !== id));
          }, TRAIL_LIFETIME_MS);
        }

        if (leaveTimer.current) {
          window.clearTimeout(leaveTimer.current);
          leaveTimer.current = null;
        }
        // Zones are flush against each other, so the cursor can move
        // directly between them without a "no zone" gap — drop any other
        // zone's dwell timer so dwell always measures continuous hover in
        // the *current* zone.
        for (const key of Object.keys(dwellStart.current)) {
          if (key !== hit) delete dwellStart.current[key];
        }
        if (!dwellStart.current[hit]) dwellStart.current[hit] = performance.now();

        if (activeZoneRef.current === hit) {
          setTooltipPos({ x, y });
        } else if (performance.now() - dwellStart.current[hit] >= DWELL_MS) {
          setActiveZone(hit);
          setTooltipPos({ x, y });
        }
      } else {
        lastTrailPos.current = null;
        dwellStart.current = {};
        if (activeZoneRef.current && !leaveTimer.current) {
          leaveTimer.current = window.setTimeout(() => {
            setActiveZone(null);
            leaveTimer.current = null;
          }, LEAVE_DELAY_MS);
        }
      }
    },
    [setActiveZone]
  );

  const handleMouseLeave = useCallback(() => {
    lastTrailPos.current = null;
    dwellStart.current = {};
    setActiveZone(null);
    setTooltipPos(null);
  }, [setActiveZone]);

  const handleZoneFocus = useCallback(
    (id: string) => {
      setActiveZone(id);
      // No cursor position for a keyboard focus — anchor the tooltip to the
      // zone's own center instead.
      const el = zoneRefs.current[id];
      const containerEl = containerRef.current;
      if (el && containerEl) {
        const zr = el.getBoundingClientRect();
        const cr = containerEl.getBoundingClientRect();
        setTooltipPos({ x: zr.left - cr.left + zr.width / 2, y: zr.top - cr.top + zr.height / 2 });
      }
    },
    [setActiveZone]
  );

  const handleZoneBlur = useCallback(
    (id: string) => {
      setActiveZone(activeZoneRef.current === id ? null : activeZoneRef.current);
      setTooltipPos(null);
    },
    [setActiveZone]
  );

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset";

  const activeItem = activeZone ? workItems.find((w) => w.id === activeZone) : null;

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--ink)" }}>
          Move through the work.
        </h3>
        <p className="text-slate-500 text-sm">
          Move your cursor to uncover what we&rsquo;ve built.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden grid grid-cols-2 mb-12"
        style={{ background: "var(--paper)" }}
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              zoneRefs.current[item.id] = el;
            }}
            className="relative h-96 md:h-[28rem]"
          >
            {/* Real, always-present accessible link. Visually empty (the
                blank canvas) — the trailing thumbnails and tooltip are
                purely decorative echoes of this same real content. */}
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onFocus={() => handleZoneFocus(item.id)}
              onBlur={() => handleZoneBlur(item.id)}
              className={`absolute inset-0 z-20 block ${focusRing}`}
            >
              <span className="sr-only">
                {item.title} — {item.kind}, {item.status}. {item.description}
              </span>
            </Link>
          </div>
        ))}

        {/* Trailing thumbnails */}
        <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
          <AnimatePresence>
            {trailItems.map((it) => (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute rounded-xl overflow-hidden"
                style={{
                  left: it.x,
                  top: it.y,
                  width: 340,
                  height: 248,
                  transform: `translate(-50%, -50%) rotate(${it.rotate}deg)`,
                  boxShadow: "0 20px 50px rgba(20,19,43,0.25)",
                  border: "1px solid rgba(20,19,43,0.1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tooltip on dwell/focus */}
        <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
          <AnimatePresence>
            {activeItem && tooltipPos && (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                className="absolute rounded-xl px-4 py-3 max-w-[240px]"
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  transform: "translate(-50%, calc(-100% - 20px))",
                  background: "rgba(5,5,14,0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-widest mb-1"
                  style={{ color: activeItem.color }}
                >
                  {activeItem.kind} &middot; {activeItem.status}
                </p>
                <p className="text-sm font-bold text-white mb-1">{activeItem.title}</p>
                <p className="text-xs font-semibold" style={{ color: activeItem.color }}>
                  View project &rarr;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
