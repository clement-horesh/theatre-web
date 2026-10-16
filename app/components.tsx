import { cn } from "cn";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { appRelease } from "./links";

export function DownloadButton({ small = false }: { small?: boolean }) {
  return (
    <Button
      asChild
      className={cn(
        "button h-12 rounded-full border border-white/60 px-6 text-[13px] font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_5px_24px_#e6a28320]",
        small && "h-[34px] gap-[7px] px-[15px] text-[11px]",
      )}
    >
      <a href="/download">
        <ArrowDownToLine
          className={small ? "size-3.5" : "size-[17px]"}
          aria-hidden="true"
        />
        Download for Mac
      </a>
    </Button>
  );
}

export function Header() {
  return (
    <header className="site-header container">
      <Link href="/" className="wordmark" aria-label="Theatre home">
        <Image src="/images/theatre-icon.png" alt="" width={34} height={34} />
        <span>Theatre</span>
      </Link>
      <nav aria-label="Main navigation">
        <a className="nav-link" href="/#features">
          Features
        </a>
        <a className="nav-link" href="/#questions">
          Questions
        </a>
        <a className="nav-link nav-github" href={appRelease.repository}>
          GitHub <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <DownloadButton small />
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          <Image src="/images/theatre-icon.png" alt="" width={28} height={28} />
          <span>Theatre</span>
        </Link>
        <nav aria-label="Footer navigation">
          <a href={appRelease.repository}>GitHub</a>
          <a href={appRelease.notes}>Release notes</a>
          <a href={appRelease.issues}>Report a bug</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>Made for your library. Built for your Mac.</span>
        <span>An independent, open-source Jellyfin client.</span>
      </div>
    </footer>
  );
}

export function AppPreview() {
  return (
    <figure className="preview-figure">
      <a
        className="app-window"
        href="/images/theatre-home.webp"
        target="_blank"
        rel="noreferrer"
        aria-label="View the full-size Theatre home screenshot"
      >
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
          <ArrowDownToLine size={15} />
        </div>
        <Image
          src="/images/theatre-home.webp"
          alt="Theatre’s home screen with featured artwork, movie details, and Continue watching cards."
          width={2000}
          height={1109}
          sizes="(max-width: 1200px) 94vw, 1120px"
          preload
        />
      </a>
      <figcaption>
        <span>
          <span className="status-dot" />
          THEATRE FOR MAC
        </span>
        <span>Your collection, in its best light.</span>
      </figcaption>
    </figure>
  );
}
