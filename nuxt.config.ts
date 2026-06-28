// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

// Set before markuxt's nuxt.config is evaluated
process.env.MARKUXT_ROOT_DIR = process.env.MARKUXT_ROOT_DIR || 'src/'

export default defineNuxtConfig({
    // Keep the app source at the repo root so template-level layouts override markuxt's defaults.
    // Public assets (images, synced _markuxt/ content) live under src/public/.
    srcDir: '.',
    dir: {
        public: 'src/public',
    },

    extends: ['@markuxt/markuxt'],

    // Prerendering ~750 routes (693 publications + members/projects/news/positions)
    // with the default V8 heap (~4 GB) OOMs. The `generate` script raises the Node
    // heap to 8 GB; here we also serialize prerendering (concurrency 1) to cap peak
    // memory — one route's content resident at a time. Both local (18 GB) and the
    // ubuntu-latest CI runner (16 GB) have headroom for this.
    nitro: {
        prerender: {
            concurrency: 1,
            crawlLinks: true,
        },
    },

    // Load styles — edit styles/main.css or individual partials to customize
    css: ['~~/styles/main.css'],

    // Register global icon components (outside src/ to avoid Content scanning)
    plugins: ['~~/plugins/icons.ts'],

    // i18n — locales are auto-detected and registered by the markuxt layer
    // (from src/i18n/*.json); the consumer only needs defaultLocale here.
    i18n: {
        defaultLocale: 'en',
    },

    // Site-specific head — TODO: replace /images/favicon.png with your own
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/images/favicon.png' }],
        },
    },

    // Content directory — content lives directly in src/ (not src/content/)
    content: {
        sources: {
            content: {
                driver: 'fs',
                base: resolve(process.cwd(), 'src'),
            },
        },
    },

    // Runtime app config (markuxt theme options) — customize everything below for your site.
    // Field contract: see node_modules/@markuxt/markuxt/app.config.d.ts
    appConfig: {
        markuxt: {
            logo: {
                src: '/images/uon-logo.png',
            },
            navigation: [
                { to: '/', labelKey: 'nav.home' },
                { to: '/members', labelKey: 'nav.members' },
                { to: '/publications', labelKey: 'nav.publications' },
                { to: '/projects', labelKey: 'nav.projects' },
                { to: '/positions', labelKey: 'nav.positions' },
                { to: '/news', labelKey: 'nav.news' },
            ],
            // Member categories — markuxt no longer ships built-in defaults, so every
            // category used in member frontmatter must be declared here. `key` matches
            // each member's `category:` field; `labelKey` is an i18n key in src/i18n/*.json.
            // Array order = display/filter/sort order. trent105 currently has only staff;
            // add entries (and their labelKeys) when real categories are introduced.
            members: {
                categories: [{ key: 'staff', labelKey: 'members.staff' }],
            },
            contact: {
                email: 'DigitalPort.Lab@nottingham.edu.cn',
                externalUrl: 'https://www.nottingham.edu.cn',
                externalLabelKey: 'footer.universityLink',
            },
            carousel: {
                fallbackImage: '/images/lab-3.jpg',
                images: [
                    {
                        src: '/images/lab-3.jpg',
                        alt: 'Digital Port Technologies Lab',
                        caption: 'Digital Port Technologies Lab at UNNC',
                    },
                    {
                        src: '/images/lab-2.jpg',
                        alt: 'Lab facilities',
                        caption: 'World-class research facilities',
                    },
                    {
                        src: '/images/lab-4.jpg',
                        alt: 'Lab equipment',
                        caption: 'Advanced computing resources',
                    },
                ],
            },
            // Homepage research-area cards.
            // Icons are registered in ./plugins/icons.ts; labels live in src/i18n/*.json.
            researchAreas: [
                { icon: 'IconSearch', titleKey: 'research.scheduling', descKey: 'research.schedulingDesc' },
                { icon: 'IconRobot', titleKey: 'research.supplyChain', descKey: 'research.supplyChainDesc' },
                { icon: 'IconNeural', titleKey: 'research.vision', descKey: 'research.visionDesc' },
                { icon: 'IconAssemblyLine', titleKey: 'research.intelligentProcess', descKey: 'research.intelligentProcessDesc' },
            ],
        },
    },
});
