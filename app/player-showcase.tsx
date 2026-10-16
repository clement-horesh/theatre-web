import {
  Airplay,
  AudioLines,
  Gauge,
  PictureInPicture2,
  Play,
  RotateCcw,
  RotateCw,
  Subtitles,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { AppPreview } from "./components";

export function PlayerShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`player-showcase${compact ? " player-showcase-compact" : ""}`}
      role="img"
      aria-label="Illustration of Theatre’s video player, with controls over the video, audio and subtitle menus, and Skip Intro."
    >
      <Image
        className="player-scene"
        src="/images/theatre-player-scene.webp"
        alt=""
        width={1300}
        height={700}
        sizes={
          compact
            ? "(max-width: 800px) 45vw, 440px"
            : "(max-width: 800px) 94vw, 1100px"
        }
      />
      <div className="player-ui" aria-hidden="true">
        <div className="player-top">
          <div className="player-glass player-output">
            <PictureInPicture2 />
            <Airplay />
          </div>
          <div className="player-glass player-volume">
            <span />
            <Volume2 />
          </div>
        </div>
        <div className="player-transport">
          <span className="player-round player-seek">
            <RotateCcw />
            <small>10</small>
          </span>
          <span className="player-round player-play">
            <Play fill="currentColor" />
          </span>
          <span className="player-round player-seek">
            <RotateCw />
            <small>10</small>
          </span>
        </div>
        <div className="player-bottom">
          <span className="skip-preview">Skip Intro</span>
          <div className="player-info">
            <span>
              <small>S1, E2</small>Episode title
            </span>
            <div className="player-glass player-tracks">
              <Subtitles />
              <AudioLines />
              <Gauge />
            </div>
          </div>
          <div className="player-timeline">
            <span>08:24</span>
            <i />
            <span>−21:36</span>
          </div>
        </div>
      </div>
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
        <span className="cinema-caption">Your library. Your player.</span>
      </div>
    </div>
  );
}
