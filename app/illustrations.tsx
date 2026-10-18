import { ArrowRight, Check, FileVideo, Folder } from "lucide-react";
import Image from "next/image";

const playerCaptures = {
  subtitles: {
    src: "/images/theatre-subtitles.png",
    width: 696,
    height: 708,
    alt: "Theatre subtitle appearance settings for position, size, and color.",
  },
  audio: {
    src: "/images/theatre-audio.png",
    width: 762,
    height: 378,
    alt: "Theatre audio menu with French and English audio tracks.",
  },
  output: {
    src: "/images/theatre-airplay-pip.png",
    width: 2144,
    height: 1262,
    alt: "Theatre’s native Picture in Picture and AirPlay controls below the window buttons.",
  },
};

export function PlayerFeatureCapture({
  kind,
}: {
  kind: keyof typeof playerCaptures;
}) {
  return (
    <div className={`player-capture capture-${kind}`}>
      <div className="player-capture-frame">
        <Image
          {...playerCaptures[kind]}
          sizes={
            kind === "output" ? "1140px" : kind === "audio" ? "600px" : "330px"
          }
        />
      </div>
    </div>
  );
}

export function SetupIllustration({ kind }: { kind: "install" | "connect" }) {
  return (
    <div className={`setup-visual setup-${kind}`} aria-hidden="true">
      {kind === "install" ? (
        <div className="install-demo">
          <div>
            <Image
              src="/images/theatre-icon.png"
              alt=""
              width={48}
              height={48}
            />
            <span>Theatre</span>
          </div>
          <ArrowRight size={20} />
          <div>
            <Folder size={48} strokeWidth={1.2} />
            <span>Applications</span>
          </div>
        </div>
      ) : (
        <Image
          className="sign-in-screenshot"
          src="/images/theatre-sign-in.webp"
          alt=""
          width={900}
          height={650}
          sizes="(max-width: 800px) 85vw, 510px"
        />
      )}
    </div>
  );
}

export function DownloadIllustration() {
  return (
    <div className="offline-art" aria-hidden="true">
      <div className="offline-preview">
        <Image
          src="/images/theatre-download.jpg"
          alt=""
          width={720}
          height={406}
          sizes="(max-width: 540px) 80vw, 380px"
        />
        <span className="offline-status">
          <Check size={14} />
          Available offline
        </span>
      </div>
      <span className="offline-download">
        <Image
          src="/images/download-dotted.svg"
          alt=""
          width={38}
          height={38}
        />
      </span>
    </div>
  );
}

const videoFormats = [
  "MKV",
  "MP4",
  "MOV",
  "AVI",
  "WEBM",
  "M4V",
  "MPEG",
  "MPG",
  "TS",
  "M2TS",
  "MTS",
  "VOB",
  "WMV",
  "ASF",
  "FLV",
  "OGV",
  "3GP",
  "3G2",
  "M2V",
  "DIVX",
  "MXF",
  "F4V",
  "OGG",
  "RM",
];

export function FormatsIllustration() {
  return (
    <div className="format-art" aria-hidden="true">
      <div className="format-grid">
        {videoFormats.map((format) => (
          <div className="format-tile" key={format}>
            <FileVideo size={24} strokeWidth={1.3} />
            <span>.{format.toLowerCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
