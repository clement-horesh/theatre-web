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
const icon = await readFile(
  join(process.cwd(), "public/images/theatre-icon.png"),
);
const [newsreader, newsreaderItalic] = await Promise.all(
  ["normal", "italic"].map((style) =>
    readFile(
      join(
        process.cwd(),
        `node_modules/@fontsource/newsreader/files/newsreader-latin-400-${style}.woff`,
      ),
    ),
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
        color: "#f1f5fb",
        background: "radial-gradient(ellipse at 100% 0%, #243c57, #0e1116 75%)",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          fontSize: 42,
          fontFamily: "Newsreader",
        }}
      >
        {/* ImageResponse renders an embedded image rather than a Next Image. */}
        {/* biome-ignore lint/performance/noImgElement: Satori requires a plain image element. */}
        <img
          src={`data:image/png;base64,${icon.toString("base64")}`}
          alt=""
          width={52}
          height={52}
        />
        Theatre
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Newsreader",
          fontSize: 94,
          fontWeight: 400,
          letterSpacing: "-2px",
          lineHeight: 1.03,
        }}
      >
        <span>Jellyfin on</span>
        <span style={{ color: "#9cceff", fontStyle: "italic" }}>your Mac.</span>
      </div>
      <div style={{ display: "flex", color: "#a2aebe", fontSize: 22 }}>
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
        {
          name: "Newsreader",
          data: new Uint8Array(newsreader).buffer,
          weight: 400,
          style: "normal",
        },
        {
          name: "Newsreader",
          data: new Uint8Array(newsreaderItalic).buffer,
          weight: 400,
          style: "italic",
        },
      ],
    },
  );
}
