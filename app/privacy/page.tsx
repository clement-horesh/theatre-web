import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { appRelease } from "../links";

export const metadata: Metadata = {
  title: "Privacy — Theatre",
  description: "How the Theatre website and Mac app handle your data.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="legal-page container">
        <Link className="text-link" href="/">
          ← Back to Theatre
        </Link>
        <p className="eyebrow">A LITTLE CLARITY</p>
        <h1>Privacy.</h1>
        <p className="legal-lead">
          Your collection belongs to you. Here’s what happens when you visit
          this site or use Theatre.
        </p>
        <h2>This website</h2>
        <p>
          This site uses no analytics, advertising, tracking pixels, or
          newsletter forms. It is hosted on Vercel, which may process connection
          information such as IP addresses and request logs to operate its
          service. See{" "}
          <a href="https://vercel.com/legal/privacy-policy">
            Vercel’s privacy policy
          </a>
          .
        </p>
        <p>
          Download, source-code, and issue links take you to GitHub. GitHub
          handles those requests under its{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            privacy policy
          </a>
          .
        </p>
        <h2>The Mac app</h2>
        <p>
          Theatre connects to the Jellyfin server you choose. Credentials are
          sent to that server to sign in, and the server-issued session token is
          saved in macOS Keychain. Theatre does not save your password. The app
          includes no analytics or third-party crash-reporting service.
        </p>
        <p>
          Your Jellyfin server receives browsing, playback, download, and
          watch-progress requests. Downloaded media and cached artwork are
          stored on your Mac. Remote trailer providers may receive requests when
          their thumbnails or trailers are loaded.
        </p>
        <p>
          The app’s{" "}
          <a href={`${appRelease.repository}/blob/main/PRIVACY.md`}>
            full privacy information
          </a>{" "}
          describes server connections, local storage, sign-out, and trailers in
          more detail.
        </p>
        <h2>Questions or issues?</h2>
        <p>
          You can <a href={appRelease.issues}>open an issue on GitHub</a>. Don’t
          include your password, session token, or private server address in a
          public report.
        </p>
      </main>
      <Footer />
    </>
  );
}
