import { BrowserChrome } from "./BrowserChrome";
import { ConceptBadge } from "./ConceptBadge";

const services = ["Lawn Care", "Design", "Maintenance"];

export function LandscapingConcept() {
  return (
    <div className="relative inline-block">
      <BrowserChrome url="greenridgelandscaping.com">
        {/* Split hero: image block left, copy right */}
        <div className="grid grid-cols-2 h-[190px]">
          <div className="relative" style={{ background: "linear-gradient(160deg, #2a3a1e, #14200f)" }}>
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(138,175,142,0.3), transparent 65%)" }}
            />
          </div>
          <div className="flex flex-col justify-center px-6" style={{ background: "#0d120d" }}>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase mb-2" style={{ color: "#8AAF8E" }}>
              Green Ridge
            </span>
            <h3 className="text-lg font-bold text-white leading-tight mb-3">
              Your yard,
              <br />
              done right.
            </h3>
            <button
              className="self-start px-3.5 py-2 rounded-full text-[11px] font-semibold cursor-pointer"
              style={{ background: "#8AAF8E", color: "#0d120d" }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Service icon row */}
        <div className="px-6 py-5 flex gap-8 justify-center" style={{ background: "#0d0d12" }}>
          {services.map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(138,175,142,0.15)" }}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                  <path d="M8 2v12M3 7h10" stroke="#8AAF8E" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[9px] text-white/60">{s}</p>
            </div>
          ))}
        </div>
      </BrowserChrome>
      <ConceptBadge />
    </div>
  );
}
