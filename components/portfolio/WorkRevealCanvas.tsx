"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { workItems } from "@/components/portfolio/work-items";

const DWELL_MS = 320;
const LEAVE_DELAY_MS = 150;
const FOG_COLOR = "2,2,8";

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Desktop-only "fog of war" reveal: a canvas overlay sits above the real
 * previews and is scratched away around the cursor, with a faint re-fog pass
 * every frame producing the fading ghost-trail effect. The DOM underneath is
 * always real content — the canvas is a purely visual layer, never a
 * substitute for it, so it can be dropped entirely with no loss of meaning.
 */
export function WorkRevealCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const dwellStart = useRef<Record<string, number>>({});
  const leaveTimer = useRef<number | null>(null);
  const inViewRef = useRef(false);
  const activeZoneRef = useRef<string | null>(null);
  const [activeZone, setActiveZoneState] = useState<string | null>(null);

  const setActiveZone = useCallback((id: string | null) => {
    activeZoneRef.current = id;
    setActiveZoneState(id);
  }, []);

  // Gate the animation loop to when the section is actually visible.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      inViewRef.current = entry.isIntersecting;
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Size the canvas to the container and paint the initial fog.
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgba(${FOG_COLOR},0.88)`;
      ctx.fillRect(0, 0, width, height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // The RAF loop: passive re-fog + cursor erase + full-clear on active zone.
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!inViewRef.current) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      const cr = container.getBoundingClientRect();

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(${FOG_COLOR},0.035)`;
      ctx.fillRect(0, 0, width, height);

      const pos = mouseRef.current;
      if (pos) {
        const radius = 130;
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius);
        grad.addColorStop(0, "rgba(0,0,0,1)");
        grad.addColorStop(0.7, "rgba(0,0,0,0.55)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const az = activeZoneRef.current;
      if (az) {
        const zoneEl = zoneRefs.current[az];
        if (zoneEl) {
          const zr = zoneEl.getBoundingClientRect();
          const pad = 14;
          ctx.globalCompositeOperation = "destination-out";
          ctx.fillStyle = "rgba(0,0,0,1)";
          roundRectPath(
            ctx,
            zr.left - cr.left - pad,
            zr.top - cr.top - pad,
            zr.width + pad * 2,
            zr.height + pad * 2,
            16
          );
          ctx.fill();
        }
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

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
        if (leaveTimer.current) {
          window.clearTimeout(leaveTimer.current);
          leaveTimer.current = null;
        }
        // Zones are flush against each other (no gap), so the cursor can
        // move directly from one zone to another without ever passing
        // through a "no zone" gap. Drop any other zone's timer so dwell
        // always measures continuous hover in the *current* zone, not a
        // stale timestamp left over from briefly passing through it earlier.
        for (const key of Object.keys(dwellStart.current)) {
          if (key !== hit) delete dwellStart.current[key];
        }
        if (!dwellStart.current[hit]) dwellStart.current[hit] = performance.now();
        if (performance.now() - dwellStart.current[hit] >= DWELL_MS && activeZoneRef.current !== hit) {
          setActiveZone(hit);
        }
      } else {
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
    mouseRef.current = null;
    dwellStart.current = {};
    setActiveZone(null);
  }, [setActiveZone]);

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset";

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
          Move through the work.
        </h3>
        <p className="text-slate-400 text-sm">
          Move your cursor to uncover what we&rsquo;ve built.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl grid grid-cols-2 mb-12"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {workItems.map((item) => {
          const isActive = activeZone === item.id;
          return (
            <div
              key={item.id}
              ref={(el) => {
                zoneRefs.current[item.id] = el;
              }}
              className="relative h-80 md:h-96 overflow-hidden"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              {/* Real preview — sits beneath the fog canvas so it's the thing
                  actually being revealed, rather than the fog painting under it. */}
              <div className="absolute inset-0">{item.preview}</div>

              {/* Real, always-present link + info block. Given an explicit
                  z-index (unlike the canvas and preview above, which are left
                  at the default stacking level) so this whole layer paints
                  above the fog regardless of DOM order. */}
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                onFocus={() => setActiveZone(item.id)}
                onBlur={() => setActiveZone(activeZoneRef.current === item.id ? null : activeZoneRef.current)}
                className={`absolute inset-0 z-20 block ${focusRing}`}
              >
                <div
                  className="absolute inset-x-0 bottom-0 p-5 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(2,2,8,0.94) 15%, rgba(2,2,8,0.55) 65%, transparent)",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: item.color }}>
                    {item.kind} &middot; {item.status}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </div>
          );
        })}

        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
