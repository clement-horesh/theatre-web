import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Theatre — Jellyfin on your Mac";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const inter = await readFile(
  join(
    process.cwd(),
    "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
  ),
);

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
        color: "#eeedeb",
        background: "#0e0e0f",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          fontSize: 34,
          fontFamily: "Inter",
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
          <svg width="20" height="24" viewBox="0 0 20 24" aria-hidden="true">
            <path d="M2 1L19 12L2 23Z" fill="#eeedeb" />
          </svg>
        </div>
        Theatre
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          fontSize: 94,
          fontWeight: 400,
          letterSpacing: "-2px",
          lineHeight: 0.95,
        }}
      >
        <span>Jellyfin on</span>
        <span>your Mac.</span>
      </div>
      <div style={{ display: "flex", color: "#a1a1a6", fontSize: 22 }}>
        Free and open source. Available for Apple Silicon.
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: new Uint8Array(inter).buffer,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
