export function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      className="relative w-[380px] rounded-2xl overflow-hidden"
      style={{ border: "1.5px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "#15151f", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div
          className="flex-1 mx-2 px-3 py-1 rounded-md text-[10px] font-mono text-white/40 truncate"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
