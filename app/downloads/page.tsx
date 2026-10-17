import { Laptop, Smartphone, TvMinimal } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton, Footer, Header } from "../components";
import { appRelease } from "../links";

export const metadata: Metadata = {
  title: "Download Theatre",
  description:
    "Download Theatre for Mac. iPhone and Apple TV versions are not available yet.",
};

export default function Downloads() {
  return (
    <>
      <Header />
      <main className="downloads-page page-width">
        <div className="downloads-heading">
          <Link className="text-link" href="/">
            ← Back to Theatre
          </Link>
          <h1>Download Theatre.</h1>
          <p>Available for Mac. More Apple devices are coming later.</p>
        </div>
        <div className="platform-grid">
          <article className="platform-card platform-mac">
            <Laptop size={36} strokeWidth={1.4} aria-hidden="true" />
            <span className="platform-status">Available now</span>
            <h2>Mac</h2>
            <p>
              Play your Jellyfin movies and shows. Download them to watch
              offline.
            </p>
            <div className="platform-download">
              <DownloadButton />
              <span>Apple Silicon · macOS 13+</span>
              <a href={appRelease.notes}>
                Version {appRelease.version} · Public beta
              </a>
            </div>
            <Image
              className="platform-preview"
              src="/images/theatre-home-screen.webp"
              alt="Theatre on Mac, with featured movies and Continue watching."
              width={2000}
              height={1163}
              sizes="(max-width: 800px) 85vw, 700px"
            />
          </article>
          <article
            className="platform-card platform-unavailable"
            aria-label="iPhone — not available yet"
          >
            <Smartphone size={36} strokeWidth={1.4} aria-hidden="true" />
            <span className="platform-status">Coming later</span>
            <h2>iPhone</h2>
            <p>The iPhone app is not available yet.</p>
            <button disabled type="button">
              Not available yet
            </button>
          </article>
          <article
            className="platform-card platform-unavailable"
            aria-label="Apple TV — not available yet"
          >
            <TvMinimal size={36} strokeWidth={1.4} aria-hidden="true" />
            <span className="platform-status">Coming later</span>
            <h2>Apple TV</h2>
            <p>The Apple TV app is not available yet.</p>
            <button disabled type="button">
              Not available yet
            </button>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
