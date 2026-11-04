import { ImageResponse } from "next/og";

export const alt = "Bhaskar B C – Full Stack Developer | AI Integration & Automation Developer";
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
          padding: 90,
          background: "radial-gradient(circle at 20% 10%, #1d2140 0%, #07080a 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#8b9cff", letterSpacing: 4 }}>PORTFOLIO</div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24, letterSpacing: -3 }}>Bhaskar B C</div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 20, color: "#c7cbd4" }}>Full Stack Developer</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 8, color: "#5eead4" }}>AI Integration &amp; Automation Developer</div>
      </div>
    ),
    size,
  );
}
