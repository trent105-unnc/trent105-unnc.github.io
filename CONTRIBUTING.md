# Content Guide

This guide explains how to manage content for a site built from the **markuxt template**. It applies to any lab/institute site cloned from this template.

## Directory Structure

```bash
src/
├── i18n/                     # Internationalization dictionaries
│   ├── en.json               # English UI strings
│   └── zh-CN.json            # Simplified Chinese UI strings
├── members/                  # Team member profiles
│   ├── staff/                # Faculty and staff
│   │   └── assets/           # Staff photos (WebP/JPG)
│   ├── research-students/    # PhD and research students
│   ├── research-assistants/  # Research assistants
│   └── alumni/               # Former members
├── news/                     # News and announcements
├── publications/             # Research publications by year
├── projects/                 # Research projects
│   └── {project-slug}/
│       ├── index.md          # Project content
│       └── assets/           # Project images, SVGs, videos
├── positions/                # Open positions
└── public/
    └── images/               # Static images (logo, carousel, etc.)
```

### Asset Co-location

Images and media are stored alongside the content that uses them, inside `assets/` subdirectories.

**Shared category assets** — single-file content types (members, publications, news):

```bash
src/members/staff/
  jane-doe.md                # image: assets/jane-doe.webp
  assets/
    jane-doe.webp
```

**Per-content assets** — folder-based content (projects):

```bash
src/projects/my-project/
  index.md                   # image: assets/banner.svg
  assets/
    banner.svg
    photo.jpg
```

In Markdown, reference co-located assets with relative paths:

```markdown
![Project Banner](./assets/banner.svg)
```

## Content Types

### Members (`/members`)

Team member profiles organized by category: **staff**, **research-students**, **research-assistants**, **alumni**.

**Key fields**: `name`, `role`, `email`, `image`, `category`, `order`

### News (`/news`)

News articles and announcements.

**Key fields**: `title`, `date`, `tags`, `description`

### Publications (`/publications`)

Research publications organized by year.

**Key fields**: `title`, `authors`, `year`, `doi`, `venue`, `keywords`

### Projects (`/projects`)

Research projects with status tracking.

**Key fields**: `title`, `description`, `status`, `year`, `image`, `funded`

**Status options**: `open`, `ongoing`, `completed`, `maintained`

### Positions (`/positions`)

Open positions for recruitment.

**Key fields**: `title`, `description`, `type`, `requirements`, `email`

## Adding New Content

1. Navigate to the appropriate content directory.
2. Create a new `.md` file (copy the frontmatter from an existing file or the directory's `readme.md` template).
3. Fill in the required and optional fields.
4. Write your content in Markdown below the frontmatter.
5. Commit and push — changes deploy automatically.

### Single-file vs. Folder Content

Both patterns are available for **all content types** (members, news, publications, projects, positions):

| Pattern             | When to use                                 | Example                                    |
|---------------------|---------------------------------------------|--------------------------------------------|
| Single `.md` file   | Simple content, no dedicated assets         | `news/my-article.md`                       |
| Folder + `index.md` | Content with its own images/videos/diagrams | `projects/my-project/index.md` + `assets/` |

Use the folder pattern whenever you need assets scoped to a single piece of content (avoiding naming collisions with other files in the same directory).

## Hiding Content

To hide a file from a listing (e.g. template/example files):

```yaml
---
_hidden: true
---
```

## Image Guidelines

- **Members**: 400×400px (square), WebP preferred
- **Projects**: 800×600px or 1200×800px, SVG for diagrams, WebP/JPG for photos
- **News**: 800×450px (16:9), WebP recommended
- **Naming**: lowercase, hyphenated filenames matching the content slug

## Internationalization (i18n)

The site supports English (`en`) and Simplified Chinese (`zh-CN`). Language is auto-detected from the browser and can be switched via the header toggle.

### UI Strings

All UI strings are stored in `src/i18n/`:

- `en.json` — English
- `zh-CN.json` — Simplified Chinese

To add or update a UI string, edit both files. Keep the dot-namespaced keys identical across locales.

### Content Locale

Localize a Markdown file by adding a locale suffix:

| Filename        | Locale             |
|-----------------|--------------------|
| `page.md`       | English (default)  |
| `page.zh-CN.md` | Simplified Chinese |

**Localizing a member profile:**

```bash
src/members/staff/
  jane-doe.md           # English (default)
  jane-doe.zh-CN.md     # Chinese translation
  assets/
    jane-doe.webp       # Shared photo
```

**Localizing a project:**

```bash
src/projects/my-project/
  index.md              # English (default)
  index.zh-CN.md        # Chinese translation
  assets/               # Shared assets
    banner.svg
```

## Deployment

Content changes are automatically deployed when pushed to the `main` branch via GitHub Actions.
