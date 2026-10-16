import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "Theatre — Your Jellyfin library. A better seat.",
  description:
    "A native Jellyfin player for Mac. A beautiful home for your movies and shows, broad-format playback, and offline downloads. Free and open source.",
  applicationName: "Theatre",
  icons: {
    icon: "/images/theatre-icon.png",
    apple: "/images/theatre-icon.png",
  },
  openGraph: {
    title: "Theatre — Your Jellyfin library. A better seat.",
    description:
      "Your movies. Your shows. A native Mac experience, made for Jellyfin.",
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
      <body>{children}</body>
    </html>
  );
}
