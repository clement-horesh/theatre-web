import { ImageResponse } from "next/og";

export const alt = "Theatre. Your Jellyfin library. A better seat.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "72px",
        justifyContent: "space-between",
        color: "#f5f1eb",
        background: "linear-gradient(130deg, #30221c, #0b0b0d 65%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          fontSize: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            border: "1px solid #65605a",
            width: 52,
            height: 52,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ▶
        </div>
        Theatre
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          fontWeight: 600,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        <span>Your Jellyfin library.</span>
        <span style={{ color: "#b7a89c" }}>A better seat.</span>
      </div>
      <div style={{ display: "flex", color: "#d4c7bd", fontSize: 22 }}>
        Made for Mac. Free & open source.
      </div>
    </div>,
    size,
  );
}
