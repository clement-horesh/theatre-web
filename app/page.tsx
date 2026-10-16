import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  FolderDown,
  Play,
  Subtitles,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppPreview, DownloadButton, Footer, Header } from "./components";
import { appRelease } from "./links";

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
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <a href={appRelease.notes} className="release-label">
              <span className="status-dot" />
              Version {appRelease.version} · Public beta
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <h1 id="hero-title">
              Jellyfin on
              <br />
              your Mac.
            </h1>
            <p>
              Watch movies and shows from your Jellyfin server. A native Mac app
              with offline downloads.
            </p>
            <div className="hero-actions">
              <DownloadButton />
              <a className="text-link" href={appRelease.repository}>
                View on GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p className="download-note">
              Free and open source. Apple Silicon · macOS 13+
            </p>
          </div>
          <div className="hero-art">
            <AppPreview />
          </div>
        </section>

        <section
          id="features"
          className="features page-width"
          aria-label="Features"
        >
          <article className="library-feature feature-panel">
            <div className="feature-heading">
              <h2>Movies and shows, together.</h2>
              <p>
                Browse your library, pick a season, and keep watching.
                <br className="desktop-break" /> Your progress stays in sync
                with Jellyfin.
              </p>
            </div>
            <div className="library-preview">
              <AppPreview show />
            </div>
          </article>
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
              <div className="offline-art" aria-hidden="true">
                <FolderDown size={106} strokeWidth={0.9} />
                <span>Saved on your Mac.</span>
              </div>
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
          <div className="feature-notes">
            <div>
              <Play size={18} aria-hidden="true" />
              <h3>Keep watching</h3>
              <p>Resume a video or play the next episode automatically.</p>
            </div>
            <div>
              <Subtitles size={18} aria-hidden="true" />
              <h3>Adjust your subtitles</h3>
              <p>Change their language, size, color, and position.</p>
            </div>
            <div>
              <AudioLines size={18} aria-hidden="true" />
              <h3>Choose your audio</h3>
              <p>Switch tracks and save your preferred language.</p>
            </div>
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
              <span>01</span>
              <h3>Install Theatre</h3>
              <p>Open the DMG and drag Theatre into Applications.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Sign in</h3>
              <p>Enter your Jellyfin server address, username, and password.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Press play</h3>
              <p>
                Your library loads from your server. Choose a title to start.
              </p>
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
            <h2 id="release-title">Still in beta.</h2>
            <p>
              The first public build is available now. Found an issue?
              <br className="desktop-break" /> Report it on GitHub so we can
              improve it.
            </p>
          </div>
          <a className="release-row" href={appRelease.notes}>
            <span className="release-version">v{appRelease.version}</span>
            <div>
              <h3>First public beta</h3>
              <p>Movie and show libraries, playback, and offline downloads.</p>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a className="text-link" href={appRelease.issues}>
            Report an issue
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </section>

        <section
          className="closing-section page-width"
          aria-labelledby="closing-title"
        >
          <Image src="/images/theatre-icon.png" alt="" width={48} height={48} />
          <h2 id="closing-title">Get Theatre.</h2>
          <p>A free Jellyfin player for Mac.</p>
          <DownloadButton />
          <span className="download-note">
            Version {appRelease.version} · Public beta
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
}
