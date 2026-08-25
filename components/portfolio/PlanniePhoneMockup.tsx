const CYAN = "#22D3EE";

export function PlanniePhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[220px] h-[440px] ${className}`}>
      {/* Frame */}
      <div
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: "#08091a",
          border: "1.5px solid rgba(255,255,255,0.1)",
          boxShadow: `0 0 60px rgba(34,211,238,0.15), 0 40px 80px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-[10px] font-mono text-white/50">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-1.5 rounded-sm border border-white/30 relative">
              <div className="absolute inset-[1px] right-[3px] bg-white/50 rounded-sm" />
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="px-4 pt-1">
          {/* App header */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-base font-bold tracking-tight"
              style={{ color: CYAN }}
            >
              plannie
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "rgba(34,211,238,0.1)", border: `1px solid ${CYAN}30` }}
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                <circle cx="8" cy="5" r="3" stroke={CYAN} strokeWidth="1.2" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={CYAN} strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Location chip */}
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-4"
            style={{ background: "rgba(34,211,238,0.08)", border: `1px solid ${CYAN}25` }}
          >
            <svg viewBox="0 0 16 16" className="w-3 h-3 flex-shrink-0" fill={CYAN}>
              <path d="M8 1C5.239 1 3 3.239 3 6c0 3.5 5 9 5 9s5-5.5 5-9c0-2.761-2.239-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span className="text-[11px] text-white/70 truncate">New York City, NY</span>
          </div>

          {/* Category chips */}
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {["Food", "Activities", "For Me ✨"].map((cat, i) => (
              <div
                key={cat}
                className="rounded-full px-2.5 py-1 text-[9px] font-medium"
                style={{
                  background: i === 0 ? CYAN : "rgba(255,255,255,0.05)",
                  color: i === 0 ? "#08091a" : "rgba(255,255,255,0.5)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Divider label */}
          <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">
            Nearby
          </p>

          {/* Result cards */}
          {[
            { name: "La Maison", type: "French Restaurant", rating: "4.8", dist: "0.3 mi" },
            { name: "Rooftop Social", type: "Cocktail Bar", rating: "4.6", dist: "0.5 mi" },
            { name: "Sakura Garden", type: "Japanese Cuisine", rating: "4.7", dist: "0.7 mi" },
          ].map((place, i) => (
            <div
              key={place.name}
              className="rounded-xl p-2.5 mb-1.5 flex items-center gap-2.5"
              style={{
                background: i === 0 ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.03)",
                border: i === 0 ? `1px solid ${CYAN}20` : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ background: i === 0 ? `${CYAN}15` : "rgba(255,255,255,0.05)" }}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path
                    d="M3 6h10M6 3v3M10 3v3M4 9h8l-1 4H5L4 9z"
                    stroke={i === 0 ? CYAN : "rgba(255,255,255,0.3)"}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-white/80 truncate">{place.name}</p>
                <p className="text-[8px] text-white/35 truncate">{place.type}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-[9px] font-mono" style={{ color: CYAN }}>{place.rating}</p>
                <p className="text-[8px] text-white/30">{place.dist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#08091a] rounded-full z-10" />
    </div>
  );
}
