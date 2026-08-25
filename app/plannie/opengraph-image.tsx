import { ImageResponse } from "next/og";

export const alt = "Plannie — Plan Smarter, Execute Faster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020208",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 75% 25%, rgba(34,211,238,0.3) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(251,113,133,0.2) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22D3EE",
            marginBottom: 28,
          }}
        >
          Plannie — By RS Digital Labs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#F1F5F9",
            letterSpacing: -1.5,
            textAlign: "center",
            lineHeight: 1.15,
            padding: "0 90px",
          }}
        >
          Never wonder where to go again.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#94A3B8",
          }}
        >
          Curated date ideas, discovered in seconds
        </div>
      </div>
    ),
    { ...size }
  );
}
