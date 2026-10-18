import { ArrowRight, Check, FileVideo, Folder, Volume2 } from "lucide-react";
import Image from "next/image";

export function TrackIllustration({ kind }: { kind: "subtitles" | "audio" }) {
  return (
    <div className="feature-visual track-visual" aria-hidden="true">
      {kind === "subtitles" ? (
        <div className="subtitle-demo">
          <span className="subtitle-sample">Your subtitles.</span>
          <div className="subtitle-options">
            <span>Aa</span>
            <span className="size-track" />
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="audio-demo">
          <span className="audio-label">
            <Volume2 size={14} />
            Audio
          </span>
          <span>
            <Check size={13} />
            English<span className="audio-codec">5.1</span>
          </span>
          <span>
            <i />
            French<span className="audio-codec">Stereo</span>
          </span>
        </div>
      )}
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
