import {
  ArrowRight,
  Check,
  Folder,
  HardDriveDownload,
  Volume2,
} from "lucide-react";
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
          src="/images/theatre-continue.webp"
          alt=""
          width={395}
          height={235}
          sizes="280px"
        />
        <span className="offline-status">
          <Check size={14} />
          Available offline
        </span>
      </div>
      <span className="offline-download">
        <HardDriveDownload size={30} strokeWidth={1.5} />
      </span>
    </div>
  );
}
