import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { appRelease } from "./links";

export function DownloadButton({ small = false }: { small?: boolean }) {
  return (
    <Button
      asChild
      className={cn(
        "download-button h-12 rounded-lg px-5 text-sm font-medium shadow-none",
        small && "h-10 px-4",
      )}
    >
      <a href="/download">
        <Image src="/images/apple.svg" alt="" width={16} height={16} />
        Download for Mac
      </a>
    </Button>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Theatre home">
          <Image src="/images/theatre-icon.png" alt="" width={27} height={27} />
          Theatre
        </Link>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="/#features">App</a>
          <a href="/#player">Video player</a>
          <a href="/#questions">Questions</a>
          <a href={appRelease.notes}>Release notes</a>
        </nav>
        <DownloadButton small />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer page-width">
      <div className="footer-row">
        <Link href="/" className="wordmark">
          Theatre
        </Link>
        <nav aria-label="Footer navigation">
          <a href={appRelease.repository}>GitHub</a>
          <a href={appRelease.issues}>Report an issue</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}

export function AppPreview({ show = false }: { show?: boolean }) {
  const image = show ? "theatre-shows.webp" : "theatre-home-screen.webp";
  return (
    <a
      className="app-window"
      href={`/images/${image}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`View the full-size Theatre ${show ? "show" : "home"} screenshot`}
    >
      {show && (
        <div className="window-chrome" aria-hidden="true">
          <div className="traffic-lights">
            <i />
            <i />
            <i />
          </div>
          <div className="window-tabs">
            <span>Home</span>
            <span>Shows</span>
            <span>Movies</span>
          </div>
          <ArrowUpRight size={13} />
        </div>
      )}
      <Image
        src={`/images/${image}`}
        alt={
          show
            ? "Theatre show page with seasons and episodes."
            : "Theatre home screen with featured movies and Continue watching."
        }
        width={2000}
        height={show ? 1109 : 1163}
        sizes={
          show
            ? "(max-width: 800px) 90vw, 950px"
            : "(max-width: 800px) 95vw, 850px"
        }
        preload={!show}
      />
    </a>
  );
}
