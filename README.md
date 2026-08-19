# Portfolio site

> 🌐 Live at [tejasbhovad.com](https://tejasbhovad.com)

## Tech stack

- **Next.js 14** (App Router, MDX for project write-ups)
- **Three.js** via React Three Fiber + drei — the hero object
- **Tailwind CSS** with a token layer in `app/globals.css`
- **next-themes** for light/dark
- **EmailJS** for the contact form

## Editing content

Almost everything on the site reads from two files — you shouldn't need to
touch a component to update the site:

| File                       | What it holds                                                     |
| -------------------------- | ----------------------------------------------------------------- |
| `lib/content.js`           | Profile, tagline, experience, education, stats, skills, awards     |
| `public/data/projects.json` | The project index                                                  |

`lib/content.js` mirrors the résumé — update it there and the hero, experience
list, toolkit, recognition and contact sections all follow.

### Company logos

Each `experience` entry can carry a `logo` path pointing into `public/logos/`.
The mark falls back to a monogram of the company initials when the file is
missing, so adding or removing a logo needs no code change — drop the file in
and it appears. Square PNGs around 200×200 work best.

### Project entries

```jsonc
{
  "projectName": "MC Render",
  "projectDescription": "Minecraft player-model rendering in the browser",
  "type": "web",          // "web" or "other" — decides which group it lands in
  "cover": "mcrender.jpg", // wide screenshot in /public/images (preferred)
  "icon": "logo.png",      // square logo, used when there's no cover
  "tags": ["Three.js", "Next.js"],
  "liveLink": "https://mcrender.net",
  "githubLink": "https://github.com/..."
}
```

Projects with a `cover` get an image-led card; projects with only an `icon` get
the logo centred on a tinted panel instead of a stretched crop.

### Case studies

Project cards link straight to the live site (or the repo, when there's no
live URL). If you want a write-up as well, add `app/projects/<slug>/page.mdx`
and build it from the `CaseHeader` / `CaseBody` / `CaseShot` components in
`components/site/case-study.jsx` — you'll need to add your own link to it, since
the cards deliberately don't intercept.

## Design system

Colour, type and spacing are tokens, not one-offs:

- **Colour** — `app/globals.css` defines light values on `:root` and dark values
  on `.dark, [data-theme="dark"]`. Tailwind maps them to `text-baseColor` /
  `text-muted` / `text-faint` / `text-accent`, `bg-base` / `bg-surface` /
  `bg-soft`, and `border-line`. Every pair clears WCAG AA at body size.
- **Type** — a fluid scale (`.text-display`, `.text-h2`, `.text-h3`,
  `.text-lead`, `.text-body`) plus two mono styles (`.text-label`, `.text-meta`)
  for eyebrows, dates, metrics and tags. Inter for prose, JetBrains Mono for
  data.
- **Rhythm** — sections use `pt-section` (a single fluid token) and a numbered
  mono eyebrow via `components/site/section.jsx`.
- `.measure` caps line length at ~68 characters.
- **Card hover** — `components/site/spotlight.jsx` wraps every project card and
  layers an accent wash (CSS, driven by `--spot-x` / `--spot-y`). The wash sits
  under the copy and behind the photo. It sits out when `prefers-reduced-motion`
  is set.

## Local development

```bash
pnpm install
pnpm dev
```

## Designs

![preview](/github/preview.jpeg)

![full page](/github/full.jpeg)

## Reference

[1] https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/

[2] https://play.tailwindcss.com/YelhilBeHb

[3] https://pmndrs.github.io/uikit/examples/card/
