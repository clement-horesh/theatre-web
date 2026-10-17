import {
  Airplay,
  ArrowRight,
  ArrowUpRight,
  Check,
  Keyboard,
  Moon,
  PictureInPicture2,
  SkipForward,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppPreview, DownloadButton, Footer, Header } from "./components";
import {
  DownloadIllustration,
  SetupIllustration,
  TrackIllustration,
} from "./illustrations";
import { appRelease } from "./links";
import { HeroShowcase, PlayerShowcase } from "./player-showcase";

const questions = [
  {
    title: "What do I need?",
    answer:
      "An Apple Silicon Mac, macOS 13 or later, and an account on a Jellyfin server. Enter your server address and sign in. Theatre saves your session in Keychain.",
  },
  {
    title: "Does it come with movies or shows?",
    answer:
      "No. Theatre plays media from your Jellyfin server. It doesn’t include a server, movies, or shows.",
  },
  {
    title: "Is it free?",
    answer:
      "Yes. Theatre is free and open source under GPLv3. You can read the code, report issues, or contribute on GitHub.",
  },
  {
    title: "Do I need to install VLC?",
    answer:
      "No. The playback engine is included. Download the DMG and drag Theatre into Applications.",
  },
  {
    title: "What should I know about the beta?",
    answer:
      "This build is for Apple Silicon. It has been tested on macOS 27.2; older macOS versions and Intel Macs haven’t been verified. HDR, surround sound, and AirPlay still need hardware testing.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section
          className="product-hero page-width"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <h1 id="hero-title">
              Jellyfin on <em>your Mac.</em>
            </h1>
            <p>
              Watch movies and shows from your Jellyfin server. A native Mac app
              with offline downloads.
            </p>
            <div className="hero-actions">
              <DownloadButton />
              <a className="text-link" href={appRelease.repository}>
                <Image
                  className="github-logo"
                  src="/images/github.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                View on GitHub
              </a>
            </div>
            <p className="download-note">
              Free and open source · Apple Silicon · macOS 13+ ·{" "}
              <a href={appRelease.notes}>
                Version {appRelease.version} · Public beta
              </a>
            </p>
          </div>
          <HeroShowcase />
        </section>

        <section
          id="features"
          className="features page-width"
          aria-labelledby="app-title"
        >
          <div className="product-section-heading">
            <div>
              <span className="section-kicker">App</span>
              <h2 id="app-title">
                Your library,
                <br />
                in one place.
              </h2>
            </div>
            <p>
              Browse your Jellyfin movies and shows, pick a season, and keep
              watching. Your progress stays in sync with your server.
            </p>
          </div>
          <article className="library-feature feature-panel">
            <div className="library-preview">
              <AppPreview show />
            </div>
          </article>
          <div className="discovery-grid">
            <article>
              <h3>Watch the trailer</h3>
              <p>Watch trailers provided by Jellyfin in a separate window.</p>
              <div className="discovery-image trailer-image">
                <Image
                  src="/images/theatre-trailer.webp"
                  alt="Theatre’s trailer card for The Devil Wears Prada 2."
                  width={800}
                  height={563}
                  sizes="(max-width: 800px) 85vw, 350px"
                />
              </div>
            </article>
            <article>
              <h3>Follow the cast</h3>
              <p>
                Select an actor or crew member to see their other movies and
                shows on your server.
              </p>
              <div className="discovery-image cast-image">
                <Image
                  src="/images/theatre-cast.webp"
                  alt="Cast portraits and roles on a Theatre detail page."
                  width={1000}
                  height={450}
                  sizes="(max-width: 800px) 85vw, 350px"
                />
              </div>
            </article>
            <article>
              <h3>Find your next watch</h3>
              <p>
                Explore related titles recommended by Jellyfin, all from your
                own collection.
              </p>
              <div className="discovery-image related-image">
                <Image
                  src="/images/theatre-related.webp"
                  alt="Related titles recommended by Jellyfin in Theatre."
                  width={770}
                  height={630}
                  sizes="(max-width: 800px) 85vw, 350px"
                />
              </div>
            </article>
          </div>
          <div className="feature-pair">
            <article className="feature-panel offline-feature">
              <div>
                <h2>Watch without a connection.</h2>
                <p>
                  Download movies and episodes from your server.
                  <br className="desktop-break" /> Your progress syncs when you
                  reconnect.
                </p>
              </div>
              <DownloadIllustration />
            </article>
            <article className="feature-panel formats-feature">
              <div className="format-art" aria-hidden="true">
                <span>.mkv</span>
                <span>.mp4</span>
                <span>.mov</span>
              </div>
              <div>
                <h2>Play more formats.</h2>
                <p>
                  VLC playback is built in. Choose audio tracks, adjust
                  subtitles, and play in a separate window.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="player"
          className="player-section page-width"
          aria-labelledby="player-title"
        >
          <div className="product-section-heading">
            <div>
              <span className="section-kicker">Video player</span>
              <h2 id="player-title">
                Play your movies
                <br />
                and shows.
              </h2>
            </div>
            <p>
              VLC playback in a separate window. The controls stay on the
              picture and disappear while you watch.
            </p>
          </div>
          <div className="player-layout">
            <PlayerShowcase />
          </div>
          <div className="player-features">
            <article>
              <div
                className="player-feature-art autoplay-art"
                aria-hidden="true"
              >
                <SkipForward size={26} />
                <span>
                  Play next episode<small>Automatically</small>
                </span>
                <i>
                  <Check size={12} />
                </i>
              </div>
              <h3>One episode after another</h3>
              <p>
                The next episode starts when the current one ends. Autoplay is
                on by default and can be changed in Settings.
              </p>
            </article>
            <article>
              <div className="player-feature-art marker-art" aria-hidden="true">
                <span>Skip Intro</span>
                <span>
                  Next Episode
                  <SkipForward size={13} />
                </span>
              </div>
              <h3>Skip intros. Move past credits.</h3>
              <p>
                Skip Intro appears during a server-provided intro. At the
                credits, Next Episode appears if Jellyfin supplies an Outro
                marker; otherwise it appears at the end.
              </p>
            </article>
            <article>
              <TrackIllustration kind="subtitles" />
              <h3>Subtitles that suit you</h3>
              <p>
                Choose a language and adjust text size, color, and position.
                Your preferred language is remembered for later videos.
              </p>
            </article>
            <article>
              <TrackIllustration kind="audio" />
              <h3>Your audio, your pace</h3>
              <p>
                Switch audio tracks, save your preferred language, or change
                playback speed.
              </p>
            </article>
            <article>
              <div className="player-feature-art output-art" aria-hidden="true">
                <span>
                  <PictureInPicture2 size={29} />
                  <small>Picture in Picture</small>
                </span>
                <span>
                  <Airplay size={29} />
                  <small>AirPlay</small>
                </span>
              </div>
              <h3>A window that fits</h3>
              <p>
                Resize with the video’s aspect ratio locked, enter full screen,
                or use native Picture in Picture and AirPlay with compatible
                streams.
              </p>
            </article>
            <article>
              <div
                className="player-feature-art shortcuts-art"
                aria-hidden="true"
              >
                <Keyboard size={21} />
                <kbd>Space</kbd>
                <kbd>F</kbd>
                <Moon size={19} />
              </div>
              <h3>Made for watching on a Mac</h3>
              <p>
                Use media keys and macOS Now Playing. Jump 10 seconds, scrub, or
                adjust volume. Controls and cursor hide together, and the
                display stays awake during playback.
              </p>
            </article>
          </div>
        </section>

        <section
          className="setup-section page-width"
          aria-labelledby="setup-title"
        >
          <div className="section-heading">
            <h2 id="setup-title">Connect your server.</h2>
            <p>A Jellyfin account is all you need.</p>
          </div>
          <ol className="setup-steps">
            <li>
              <SetupIllustration kind="install" />
              <div className="setup-caption">
                <span>01</span>
                <div>
                  <h3>Install Theatre</h3>
                  <p>Open the DMG and drag Theatre into Applications.</p>
                </div>
              </div>
            </li>
            <li>
              <SetupIllustration kind="connect" />
              <div className="setup-caption">
                <span>02</span>
                <div>
                  <h3>Sign in</h3>
                  <p>
                    Enter your Jellyfin server address, username, and password.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section
          id="questions"
          className="questions-section page-width"
          aria-labelledby="faq-title"
        >
          <div className="section-heading">
            <h2 id="faq-title">A few questions.</h2>
            <p>What to know before you download.</p>
          </div>
          <Accordion type="single" collapsible className="questions">
            {questions.map(({ title, answer }) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="macos-approval">
              <AccordionTrigger>
                Why does macOS ask me to approve it?
              </AccordionTrigger>
              <AccordionContent>
                This beta isn’t notarized by Apple yet. After opening it, you
                may need to allow it in System Settings → Privacy &amp; Security
                → Open Anyway. Follow{" "}
                <a href="https://support.apple.com/en-us/102445">
                  Apple’s instructions
                </a>{" "}
                and only approve a download you trust.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section
          className="release-section page-width"
          aria-labelledby="release-title"
        >
          <div className="section-heading">
            <h2 id="release-title">Try the public beta.</h2>
            <p>Download Theatre and share bugs or feedback on GitHub.</p>
          </div>
          <div className="release-row">
            <span className="release-version">v{appRelease.version}</span>
            <div className="release-details">
              <h3>
                <a className="release-notes" href={appRelease.notes}>
                  First public beta
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </h3>
              <p>Movie and show libraries, playback, and offline downloads.</p>
            </div>
            <a className="text-link" href={appRelease.issues}>
              Report an issue
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="closing-section page-width"
          aria-labelledby="closing-title"
        >
          <div className="closing-copy">
            <Image
              src="/images/theatre-icon.png"
              alt=""
              width={64}
              height={64}
            />
            <h2 id="closing-title">Get Theatre for Mac.</h2>
            <p>Watch your Jellyfin library, online or offline.</p>
          </div>
          <div className="closing-actions">
            <DownloadButton />
            <span className="download-note">
              Free · Apple Silicon · macOS 13+
            </span>
            <a className="text-link" href={appRelease.notes}>
              Version {appRelease.version} · Public beta
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
