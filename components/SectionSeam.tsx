/**
 * The transition between the site's dark "void" sections (hero, footer) and
 * its light "lab" sections (Selected Work, Process, About) — a glowing
 * horizon line rather than an abrupt color cut, so the shift reads as
 * deliberate rather than jarring.
 */
export function SectionSeam({ direction }: { direction: "into-light" | "into-dark" }) {
  const gradient =
    direction === "into-light"
      ? "linear-gradient(180deg, #020208, var(--paper))"
      : "linear-gradient(180deg, var(--paper), #020208)";

  return (
    <div className="relative h-24 md:h-32" style={{ background: gradient }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(34,211,238,0.8), transparent)",
          boxShadow: "0 0 24px rgba(168,85,247,0.45), 0 0 48px rgba(34,211,238,0.25)",
        }}
      />
    </div>
  );
}
