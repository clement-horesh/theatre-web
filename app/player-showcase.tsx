import Image from "next/image";
import { AppPreview } from "./components";

export function PlayerShowcase() {
  return (
    <div className="player-showcase">
      <Image
        src="/images/theatre-player.webp"
        alt="Theatre playing Pulp Fiction with playback, volume, Picture in Picture, AirPlay, audio, and subtitle controls over the video."
        width={1920}
        height={818}
        sizes="(max-width: 800px) 90vw, 1120px"
      />
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="hero-preview">
      <AppPreview />
    </div>
  );
}
