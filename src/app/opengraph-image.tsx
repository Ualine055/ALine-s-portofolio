import { ImageResponse } from "next/og";

// The preview image shown when the portfolio link is shared (LinkedIn, WhatsApp, X...)
export const alt = "Aline Uwineza - Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #1e1e1e 55%, rgba(255,215,0,0.22) 100%)",
          backgroundColor: "#1e1e1e",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#FFD700", letterSpacing: 6, textTransform: "uppercase" }}>
          Hello, I&apos;m
        </div>
        <div style={{ fontSize: 120, fontWeight: 800, marginTop: 8 }}>Aline Uwineza</div>
        <div style={{ fontSize: 48, color: "#FFD700", marginTop: 8 }}>{"<Frontend Developer />"}</div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.7)", marginTop: 40 }}>
          React · Next.js · TypeScript · UI/UX Design
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 12, backgroundColor: "#FFD700" }} />
      </div>
    ),
    size,
  );
}
