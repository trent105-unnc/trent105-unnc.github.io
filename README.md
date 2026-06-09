# Markuxt Template

A Markdown-first **research institute / lab website** template, built with [Nuxt 3](https://nuxt.com/) and [@markuxt/markuxt](https://github.com/markuxt/markuxt).

Clone this template to spin up a multilingual (English / 简体中文) site for your lab in minutes — members, publications, projects, positions, and news, all authored in Markdown.

> **Get started:** Click the green **Use this template** button at the top of this repository on GitHub, then follow the Quick Start below.

---

## Features

- **Markdown-first content** — add members, news, publications, projects, and positions as `.md` files
- **Multilingual** — English and Simplified Chinese out of the box (extensible)
- **Co-located assets** — images/videos live next to their Markdown
- **Themable** — pick a preset in `nuxt.config.ts`, then fine-tune tokens in `styles/_tokens.css`
- **Static deployment** — `pnpm generate` → deploy to GitHub Pages or any static host

## Tech Stack

- [Nuxt 3](https://nuxt.com/) + TypeScript
- [@markuxt/markuxt](https://github.com/markuxt/markuxt) — provides layouts, pages, components, and content transformers
- [@nuxt/content](https://content.nuxt.com/) v2 — Markdown content management
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — internationalization
- [@icon-park/vue-next](https://github.com/bytedance/IconPark) — UI icons

## Quick Start

> **Prerequisites:** Node.js 20+ and [pnpm](https://pnpm.io/).
>
> `@markuxt/markuxt` is published to the GitHub npm registry. Your local/CI environment must be able to authenticate to `npm.pkg.github.com` (a `GITHUB_TOKEN` with `read:packages` is enough).

```bash
# 1. After creating a repo from this template, clone it:
git clone https://github.com/<you>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Open http://localhost:3000. You should see the homepage with a **Demo Member** and a **Welcome** news post.

> If you hit `connect EINVAL`, it's a known Nuxt issue ([nuxt/nuxt#35253](https://github.com/nuxt/nuxt/issues/35253)); the dev script already sets `TMPDIR=/tmp` as a workaround.

## Project Structure

```bash
├── plugins/
│   └── icons.ts             # Global icon component registration
├── src/
│   ├── i18n/                # UI string translations (en.json, zh-CN.json)
│   ├── members/             # Team member profiles (Markdown)
│   ├── news/                # News articles (Markdown)
│   ├── positions/           # Open positions (Markdown)
│   ├── projects/            # Projects (Markdown)
│   ├── publications/        # Publications (Markdown)
│   └── public/images/       # Static images (logo, carousel, favicon)
├── styles/                  # Design tokens + main stylesheet (overrideable)
├── nuxt.config.ts           # Site configuration (see below)
└── package.json
```

## Customizing Your Site

Almost everything site-specific lives in two places: **`nuxt.config.ts`** (structure/config) and **`src/i18n/*.json`** (text). The codebase is full of `TODO:` comments marking placeholders — search for them to find everything to replace.

### 1. Brand text & UI strings — `src/i18n/`

Replace placeholder values in `en.json` and `zh-CN.json`:

```jsonc
"site.title": "Your Lab Name - Your University",   // → your real title
"nav.brand": "Your Lab Name",                      // → your lab name
"footer.director": "Dr. Your Name",                // → your director
```

> **Keep all keys** — they are the markuxt contract. Change values only, in both locale files.

### 2. Site config — `nuxt.config.ts`

```ts
appConfig: {
  markuxt: {
    theme: {
      preset: 'ocean',                          // or 'forest' | 'sunset' | 'slate'
    },
    logo: { src: '/images/default.jpg' },          // → your logo
    contact: {
      email: 'contact@your-lab.edu',               // → your email
      externalUrl: 'https://your-university.edu',  // → your institution
    },
    carousel: { images: [ /* your photos */ ] },
    researchAreas: [ /* homepage research cards */ ],
  },
}
```

Theme presets are meant to be chosen in repo config, not switched by site visitors. `ocean` matches the original markuxt look; `forest`, `sunset`, and `slate` give you alternate palettes with the same component system.

### 3. Images — `src/public/images/`

Replace the placeholders with your own:

- `default.jpg` — generic placeholder (logo, carousel, demo avatars)
- `favicon.png` — site favicon

Reference them as `/images/<file>` (e.g. `/images/your-logo.png`).

### 4. Fine-tune design tokens — `styles/_tokens.css`

After choosing a preset, you can still override colors, fonts, spacing, and other tokens:

```css
:root {
  --color-primary: #0a2540;
  --font-display: 'Fraunces', serif;
  /* ... */
}
```

### 5. Content — `src/`

Add Markdown files under the matching directory. Each directory has a `readme.md` documenting its frontmatter fields. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full content guide.

## Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to **GitHub Pages** on every push to `main`.

1. In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. `@markuxt/markuxt` is a package on the GitHub npm registry — the workflow already passes `GITHUB_TOKEN` to `pnpm install`. If you change the registry or package visibility, adjust `registry-url` / auth accordingly.
3. For subdirectory (project-page) deployment, set `NUXT_PUBLIC_BASE_URL` in the workflow.

```bash
# build a static site locally
pnpm generate   # → .output/public/
```

## License

© Your Lab Name, Your University. All rights reserved.
