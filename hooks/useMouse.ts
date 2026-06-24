"use client";
import { useEffect, useRef } from "react";

export function useMouse() {
  const mouseRef = useRef({ x: 0, y: 0, rawX: 0, rawY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.rawX = e.clientX;
      mouseRef.current.rawY = e.clientY;
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouseRef;
}
