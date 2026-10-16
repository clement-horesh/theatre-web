import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serif = localFont({
  src: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});
const inter = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "Theatre — Jellyfin on your Mac",
  description:
    "Watch movies and shows from your Jellyfin server. A free, open-source Mac app with VLC playback and offline downloads.",
  applicationName: "Theatre",
  icons: {
    icon: "/images/theatre-icon.png",
    apple: "/images/theatre-icon.png",
  },
  openGraph: {
    title: "Theatre — Jellyfin on your Mac",
    description:
      "Watch movies and shows from your Jellyfin server. Free and open source.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
