"use client";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TrailItem = { id: number; src: string; x: number; y: number; rotate: number };

/**
 * Wraps children in a container that spawns a trailing sequence of images
 * following the cursor as it moves — each one fades/scales out shortly
 * after appearing. Purely decorative: the image layer is pointer-events-none
 * so it never blocks clicks on the real content underneath.
 */
export function CursorImageTrail({
  images,
  children,
  className = "",
}: {
  images: string[];
  children: React.ReactNode;
  className?: string;
}) {
  const [items, setItems] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const counter = useRef(0);
  const imgIndex = useRef(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      // Touch devices don't have a real cursor to trail — skip entirely so
      // mobile relies on the tap/press state on each card instead.
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastPos.current) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        if (Math.sqrt(dx * dx + dy * dy) < 90) return;
      }
      lastPos.current = { x, y };

      const id = counter.current++;
      const src = images[imgIndex.current % images.length];
      imgIndex.current += 1;
      const rotate = (Math.random() - 0.5) * 16;

      setItems((prev) => [...prev.slice(-7), { id, src, x, y, rotate }]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((it) => it.id !== id));
      }, 750);
    },
    [images]
  );

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 30 }}>
        <AnimatePresence>
          {items.map((it) => (
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
                width: 132,
                height: 96,
                transform: `translate(-50%, -50%) rotate(${it.rotate}deg)`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
