import { ArrowRight, Check, Folder, Play, Server, Volume2 } from "lucide-react";
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

export function SetupIllustration({
  kind,
}: {
  kind: "install" | "connect" | "play";
}) {
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
      ) : kind === "connect" ? (
        <div className="connect-demo">
          <span className="server-label">
            <Server size={14} />
            Jellyfin server
          </span>
          <span className="server-address">https://jellyfin.example.com</span>
          <span className="connect-action">
            Connect
            <ArrowRight size={12} />
          </span>
        </div>
      ) : (
        <div className="play-demo">
          <Image
            src="/images/theatre-home.webp"
            alt=""
            width={2000}
            height={1109}
            sizes="350px"
          />
          <span>
            <Play size={23} fill="currentColor" />
          </span>
        </div>
      )}
    </div>
  );
}
