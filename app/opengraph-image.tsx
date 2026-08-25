import { ImageResponse } from "next/og";

export const alt = "RS Digital Labs — Product Design & Development Studio";
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
            "radial-gradient(ellipse 60% 60% at 30% 20%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(34,211,238,0.25) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 44,
              height: 1,
              background:
                "linear-gradient(to right, transparent, #A855F7)",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#A855F7",
              display: "flex",
            }}
          >
            RS Digital Labs
          </div>
          <div
            style={{
              width: 44,
              height: 1,
              background: "linear-gradient(to left, transparent, #A855F7)",
            }}
          />
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
          We design and build products that ship.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#94A3B8",
          }}
        >
          Product design &amp; development studio
        </div>
      </div>
    ),
    { ...size }
  );
}
