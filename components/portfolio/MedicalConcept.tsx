import { BrowserChrome } from "./BrowserChrome";
import { ConceptBadge } from "./ConceptBadge";

const badges = ["Same-week appointments", "Patient-focused care", "Secure appointment requests"];

export function MedicalConcept() {
  return (
    <div className="relative inline-block">
      <BrowserChrome url="brightsidedental.com">
        {/* Centered hero */}
        <div
          className="h-[150px] flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(160deg, #0f1e2a, #081018)" }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase mb-2" style={{ color: "#7DD3E8" }}>
            Brightside Dental
          </span>
          <h3 className="text-lg font-bold text-white leading-tight mb-3">
            Care that puts you first.
          </h3>
          <button
            className="px-4 py-2 rounded-full text-xs font-semibold cursor-pointer"
            style={{ background: "#22D3EE", color: "#08131a" }}
          >
            Book an Appointment
          </button>
        </div>

        {/* Neutral trust-badge row */}
        <div className="flex justify-center gap-2 px-4 py-3 flex-wrap" style={{ background: "#0a0e12" }}>
          {badges.map((b) => (
            <span
              key={b}
              className="px-2.5 py-1 rounded-full text-[9px]"
              style={{ background: "rgba(34,211,238,0.1)", color: "#7DD3E8", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Provider bio card */}
        <div
          className="mx-4 mb-4 rounded-xl p-3 flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(34,211,238,0.15)" }} />
          <div>
            <p className="text-[10px] font-semibold text-white/80">Dr. Advani, DDS</p>
            <p className="text-[9px] text-white/40">General &amp; Cosmetic Dentistry</p>
          </div>
        </div>
      </BrowserChrome>
      <ConceptBadge />
    </div>
  );
}
