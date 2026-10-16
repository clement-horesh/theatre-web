import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Film,
  FolderDown,
  Heart,
  Monitor,
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
import { Button } from "@/components/ui/button";
import { AppPreview, DownloadButton, Footer, Header } from "./components";
import { appRelease } from "./links";

const features = [
  {
    icon: Film,
    title: "Press play. On more formats.",
    text: "MKV, MP4, MOV, and more. VLC’s playback engine is built right in, with audio and subtitle tracks at your fingertips.",
  },
  {
    icon: FolderDown,
    title: "A little less internet required.",
    text: "Download a movie or episode from your server and take it with you. Your saved progress syncs when you reconnect.",
  },
  {
    icon: Subtitles,
    title: "Just the way you watch.",
    text: "Choose your language. Make subtitles your own. Settle into a separate player window that fits your video.",
  },
];

const questions = [
  {
    title: "What do I need to get started?",
    answer:
      "An Apple Silicon Mac (M1 or later), a Jellyfin server, and an account on that server. Theatre connects using your server address, username, and password. Your sign-in is saved securely in Keychain.",
  },
  {
    title: "Is Theatre free?",
    answer:
      "Yes. Theatre is free to download and open source under GPLv3. The code is on GitHub, where you can follow development, report an issue, or contribute.",
  },
  {
    title: "Do I need to install VLC too?",
    answer:
      "No. Everything needed for VLC playback is already bundled inside Theatre. Just download the DMG and drag Theatre into Applications. Source-code downloads are only for developers and license compliance.",
  },
  {
    title: "Does Theatre include movies or shows?",
    answer:
      "Theatre is a player for your own Jellyfin library. No movies, shows, or server are included. Artwork, metadata, and your media come from the Jellyfin server you connect to.",
  },
  {
    title: "Which macOS versions are supported?",
    answer:
      "The first beta is built for Apple Silicon and targets macOS 13 or later. Hands-on testing has been on macOS 27.2; older macOS versions and Intel Macs have not yet been verified. HDR accuracy, surround output, and AirPlay also need further hardware checks.",
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <a href={appRelease.notes} className="release-badge">
            <span className="status-dot" />
            THEATRE {appRelease.version} <span className="badge-divider" />{" "}
            PUBLIC BETA
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
          <h1 id="hero-title">
            Your Jellyfin library.
            <br />
            <span>A better seat.</span>
          </h1>
          <p className="hero-description">
            The movies you love. The shows you can’t leave.
            <br className="desktop-break" /> A beautifully native place to watch
            them on your Mac.
          </p>
          <div className="hero-actions">
            <DownloadButton />
            <Button
              asChild
              variant="outline"
              className="button h-12 rounded-full border-white/15 bg-white/[0.01] px-6 text-[13px] text-[#d1ccc7] transition-transform hover:-translate-y-0.5 hover:bg-white/5"
            >
              <a href={appRelease.repository}>
                View on GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="download-note">
            Free & open source <span>·</span> Apple Silicon <span>·</span> v
            {appRelease.version}
          </p>
          <div className="hero-preview">
            <AppPreview />
          </div>
        </section>

        <section
          className="essentials container"
          aria-label="Theatre essentials"
        >
          <span>
            <Monitor size={17} aria-hidden="true" /> Native to macOS
          </span>
          <span>
            <Play size={16} aria-hidden="true" /> Made for Jellyfin
          </span>
          <span>
            <Heart size={16} aria-hidden="true" /> Free & open source
          </span>
        </section>

        <section
          id="features"
          className="features-section container"
          aria-labelledby="features-title"
        >
          <div className="section-intro">
            <div>
              <p className="eyebrow">LESS BROWSING. MORE WATCHING.</p>
              <h2 id="features-title">
                Everything you came for.
                <br />
                <span>Right where it belongs.</span>
              </h2>
            </div>
            <p>
              A home for your collection, a place to pick up where you left off,
              and a player that gets out of the way.
            </p>
          </div>
          <div className="story-card">
            <div className="story-copy">
              <span className="small-icon">
                <Play size={19} aria-hidden="true" />
              </span>
              <p className="eyebrow">ONE MORE EPISODE?</p>
              <h3>
                Pick up the story.
                <br />
                <span>We’ll keep your place.</span>
              </h3>
              <p>
                Seasons together. Episodes in order. Resume an unfinished
                episode or start the next one, with automatic continuation when
                it ends.
              </p>
              <ul className="check-list">
                <li>
                  <Check size={15} aria-hidden="true" /> A dedicated page for
                  every show
                </li>
                <li>
                  <Check size={15} aria-hidden="true" /> Your watch progress,
                  synced with Jellyfin
                </li>
                <li>
                  <Check size={15} aria-hidden="true" /> Skip Intro when your
                  server provides it
                </li>
              </ul>
            </div>
            <a
              className="story-image"
              href="/images/theatre-shows.webp"
              target="_blank"
              rel="noreferrer"
              aria-label="View the full-size Theatre show detail screenshot"
            >
              <Image
                src="/images/theatre-shows.webp"
                alt="Theatre’s Rick and Morty detail page with artwork, a play action, season selector, and episode cards."
                width={2000}
                height={1109}
                sizes="(max-width: 800px) 90vw, 760px"
              />
              <span className="image-caption">
                All your seasons. One good place.
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="feature-list">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="getting-started" aria-labelledby="start-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow">YOUR SERVER. YOUR COLLECTION.</p>
                <h2 id="start-title">
                  Bring your library.
                  <br />
                  <span>Make yourself at home.</span>
                </h2>
              </div>
              <a className="text-link" href="https://jellyfin.org/">
                New to Jellyfin? <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <h3>Meet Theatre.</h3>
                <p>
                  Download the DMG and move Theatre into your Applications
                  folder.
                </p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h3>Connect your Jellyfin.</h3>
                <p>
                  Enter your server address and sign in. Your session stays
                  saved in Keychain.
                </p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h3>Find your next watch.</h3>
                <p>
                  Browse your collection, choose something good, and press play.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="open-section container"
          aria-labelledby="open-title"
        >
          <div>
            <p className="eyebrow">OPEN SOURCE. OPEN POSSIBILITIES.</p>
            <h2 id="open-title">
              Your library deserves
              <br />
              <span>a player of its own.</span>
            </h2>
          </div>
          <div className="open-copy">
            <p>
              Theatre is an independent project built for people who keep their
              own collection. Free to use, open to explore, and getting better
              with every release.
            </p>
            <a className="text-link" href={appRelease.repository}>
              Take a look around GitHub{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="questions"
          className="faq-section container"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">BEFORE YOU PRESS PLAY</p>
            <h2 id="faq-title">
              A few good
              <br />
              <span>questions.</span>
            </h2>
          </div>
          <Accordion
            type="multiple"
            className="questions border-t border-white/8"
          >
            {questions.map(({ title, answer }) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger className="items-center py-5 text-[13px] font-normal text-[#d8d0c9] hover:no-underline">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="max-w-[96%] pb-6 text-xs leading-[1.95] text-[#9d958f]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="macos-approval">
              <AccordionTrigger className="items-center py-5 text-[13px] font-normal text-[#d8d0c9] hover:no-underline">
                Why does macOS ask me to approve Theatre?
              </AccordionTrigger>
              <AccordionContent className="max-w-[96%] pb-6 text-xs leading-[1.95] text-[#9d958f] [&_a]:text-[#d4b7a5] [&_a]:underline">
                This public beta is not yet notarized by Apple. After attempting
                to open it, macOS may require approval in System Settings →
                Privacy & Security → Open Anyway. Follow{" "}
                <a href="https://support.apple.com/en-us/102445">
                  Apple’s instructions
                </a>{" "}
                and only approve a download you trust. This is an early beta;{" "}
                <a href={appRelease.notes}>read the release notes</a> for
                current limitations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section
          className="closing-section container"
          aria-labelledby="closing-title"
        >
          <Image
            className="closing-icon"
            src="/images/theatre-icon.png"
            alt=""
            width={76}
            height={76}
          />
          <p className="eyebrow">THEATRE FOR MAC</p>
          <h2 id="closing-title">
            Settle in.
            <br />
            <span>Your library is waiting.</span>
          </h2>
          <DownloadButton />
          <a className="closing-notes" href={appRelease.notes}>
            v{appRelease.version} · {appRelease.label}
            <ArrowRight size={12} aria-hidden="true" />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
