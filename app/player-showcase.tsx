import Image from "next/image";
import { AppPreview } from "./components";

export function PlayerShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`player-showcase${compact ? " player-showcase-compact" : ""}`}
    >
      <Image
        src="/images/theatre-player.webp"
        alt="Theatre playing Pulp Fiction with playback, volume, Picture in Picture, AirPlay, audio, and subtitle controls over the video."
        width={1920}
        height={818}
        sizes={
          compact
            ? "(max-width: 800px) 65vw, 530px"
            : "(max-width: 800px) 90vw, 1120px"
        }
      />
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="hero-cinema">
      <div className="cinema-glow" aria-hidden="true" />
      <div className="cinema-library">
        <AppPreview />
      </div>
      <div className="cinema-resume" aria-hidden="true">
        <span>Pick up where you left off</span>
        <Image
          src="/images/theatre-continue.webp"
          alt=""
          width={395}
          height={235}
          sizes="240px"
        />
      </div>
      <div className="cinema-player">
        <PlayerShowcase compact />
      </div>
    </div>
  );
}
