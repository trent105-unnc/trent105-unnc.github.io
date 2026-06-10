// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

// Set before markuxt's nuxt.config is evaluated
process.env.MARKUXT_ROOT_DIR = process.env.MARKUXT_ROOT_DIR || 'src/'

// Available presets: 'ocean' | 'forest' | 'sunset' | 'slate'
const themePreset = 'ocean'
const themeMode = 'auto'

export default defineNuxtConfig({
    // Keep the app source at the repo root so template-level layouts override markuxt's defaults.
    // Public assets (images, synced _markuxt/ content) live under src/public/.
    srcDir: '.',
    dir: {
        public: 'src/public',
    },

    extends: ['@markuxt/markuxt'],

    // Load styles — edit styles/main.css or individual partials to customize
    css: ['~~/styles/main.css'],

    // Register global icon components (outside src/ to avoid Content scanning)
    plugins: ['~~/plugins/icons.ts'],

    // i18n — site-specific locales and translations
    i18n: {
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
        ],
        langDir: '../src/i18n',
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
            // Theme preset — switch this in repo config, not in the frontend UI.
            // Available presets: 'ocean' | 'forest' | 'sunset' | 'slate'
            theme: {
                preset: themePreset,
                mode: themeMode,
            },

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
