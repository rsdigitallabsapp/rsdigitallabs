import { BrowserChrome } from "./BrowserChrome";
import { ConceptBadge } from "./ConceptBadge";

const menu = [
  { item: "Roast Chicken", price: "$24" },
  { item: "Wild Mushroom Risotto", price: "$19" },
  { item: "Seared Salmon", price: "$26" },
];

export function RestaurantConcept() {
  return (
    <div className="relative inline-block">
      <BrowserChrome url="thefarmtable.com">
        {/* Full-bleed image-band hero */}
        <div className="relative h-[220px]" style={{ background: "linear-gradient(160deg, #3a2418, #1a0f09)" }}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 25% 25%, rgba(196,113,78,0.35), transparent 60%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(196,113,78,0.2), transparent 60%)",
            }}
          />
          <div className="relative z-10 h-full flex flex-col justify-center px-8">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase mb-2" style={{ color: "#E8B08A" }}>
              Est. Neighborhood Kitchen
            </span>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Seasonal food,
              <br />
              made simple.
            </h3>
            <button
              className="self-start px-4 py-2 rounded-full text-xs font-semibold cursor-pointer"
              style={{ background: "#C4714E", color: "#fff" }}
            >
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Menu highlight strip */}
        <div className="px-6 py-4 flex gap-5" style={{ background: "#0d0d12" }}>
          {menu.map((m) => (
            <div key={m.item} className="flex-1 min-w-0">
              <p className="text-[10px] text-white/70 truncate">{m.item}</p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: "#E8B08A" }}>{m.price}</p>
            </div>
          ))}
        </div>
      </BrowserChrome>
      <ConceptBadge />
    </div>
  );
}
