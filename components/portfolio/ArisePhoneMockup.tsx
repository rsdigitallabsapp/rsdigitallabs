"use client";
import { useState } from "react";

const SAGE = "#8AAF8E";

export function ArisePhoneMockup() {
  const [count, setCount] = useState(2);
  const [streak, setStreak] = useState(7);

  const speak = () => {
    if (count >= 3) return;
    const next = count + 1;
    setCount(next);
    if (next === 3) setTimeout(() => setStreak((s) => s + 1), 350);
  };

  return (
    <div className="relative w-[260px] h-[520px]">
      <div
        className="absolute inset-0 rounded-[40px] overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #14120d 0%, #1c1912 100%)",
          border: "1.5px solid rgba(138,175,142,0.18)",
          boxShadow: `0 0 60px rgba(138,175,142,0.15), 0 40px 90px rgba(0,0,0,0.6)`,
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0d0b08] rounded-full z-10" />

        <div className="flex flex-col items-center justify-center h-full px-8 pb-8 pt-14">
          <div className="text-center mb-7">
            <div
              className="text-5xl font-bold leading-none"
              style={{ fontFamily: "var(--font-space-grotesk)", color: SAGE }}
            >
              {streak}
            </div>
            <div className="text-[10px] text-white/40 tracking-widest uppercase mt-1">
              Day streak
            </div>
          </div>
          <div className="text-center mb-9 px-1">
            <p className="text-sm text-white/85 italic leading-relaxed">
              "I am worthy of everything I work toward."
            </p>
          </div>
          <div className="flex gap-4 mb-9">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full flex items-center justify-center text-[11px] font-medium transition-all duration-300"
                style={{
                  border: `1.5px solid ${i < count ? SAGE : "rgba(138,175,142,0.3)"}`,
                  background: i < count ? SAGE : "transparent",
                  color: i < count ? "#13110D" : SAGE,
                }}
              >
                {i + 1}×
              </div>
            ))}
          </div>
          <button
            onClick={speak}
            className="w-full rounded-2xl py-3.5 text-sm font-semibold cursor-pointer transition-transform duration-150 active:scale-95"
            style={{ background: SAGE, color: "#13110D" }}
          >
            Speak aloud
          </button>
        </div>
      </div>

      <div
        className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 glass"
        style={{ boxShadow: "0 20px 48px rgba(0,0,0,0.4)" }}
      >
        <span className="text-xl" style={{ color: SAGE }}>
          ↑
        </span>
        <span className="text-[8px] text-white/40 tracking-widest uppercase">
          Momentum
        </span>
      </div>
    </div>
  );
}
