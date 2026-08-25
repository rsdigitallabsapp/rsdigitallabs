import { ImageResponse } from "next/og";

export const alt = "ARISE — Speak to Yourself First";
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
            "radial-gradient(ellipse 60% 60% at 75% 25%, rgba(138,175,142,0.3) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(196,113,78,0.2) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8AAF8E",
            marginBottom: 28,
          }}
        >
          ARISE — By RS Digital Labs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            color: "#F1F5F9",
            letterSpacing: -1.5,
            textAlign: "center",
            lineHeight: 1.15,
            padding: "0 90px",
          }}
        >
          Before the world speaks to you, speak to yourself.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#94A3B8",
          }}
        >
          One affirmation. Three times. Ten seconds.
        </div>
      </div>
    ),
    { ...size }
  );
}
