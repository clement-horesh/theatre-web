# Theatre website

The promotional website for [Theatre](https://github.com/clement-horesh/theatre), a native Jellyfin client for Mac. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui, and deployed on Vercel.

## Development

Use Node.js 24 LTS, then:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Before publishing:

```sh
npm run lint
npm run build
npm run typecheck
```

`npm run format` formats the source with Biome. There is no database, account system, analytics, or required secret configuration.

## Releases and deployment

Update `app/links.ts` when publishing a new app release. All download buttons use `/download`, which redirects to the GitHub-hosted DMG. The installer is not stored in this repository.

Import this repository into Vercel using its Next.js defaults. Pushes to `main` deploy the production site; branches receive previews. Vercel provides the production URL through its system environment variable for social metadata. Local development uses localhost.

## License and assets

Website source is licensed under GPLv3; shadcn/ui components retain their MIT license (see THIRD_PARTY_NOTICES.md); see [LICENSE](LICENSE). Theatre's icon and screenshots are in `public/images`. Screenshots show the real app with an illustrative Jellyfin library. Movie and show artwork belongs to its respective rights holders and is not licensed under this repository's source-code license. No playable media is included.

Theatre is an independent project, not affiliated with Jellyfin, Apple, or the featured media's creators. Playback uses VLC; the app repository documents the bundled components and corresponding source distributions.
