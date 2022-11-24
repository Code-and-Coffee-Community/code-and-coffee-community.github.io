import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../docs',
  lastUpdated: true,
  lang: 'de-DE',
  title: 'Code & Coffee',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/icons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/icons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#da532c"}],
    ['meta', { name: "msapplication-config", content: "/icons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    siteTitle: 'Code & Coffee',
    logo: '/images/logo.png',
    nav: [
      { text: 'Impressum', link: '/impressum.html' },
      { text: 'Datenschutz', link: '/datenschutz.html' },
    ],
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@codeandcoffeeofficial' },
      { icon: 'discord', link: 'http://discord.code-n.coffee' },
      { icon: 'github', link: 'https://github.com/Code-and-Coffee-Community' },
    ],
    footer: {
      message: 'Code & Coffee',
      copyright: 'Copyright © 2022'
    },
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Blog', link: '/content/blog' },
          { text: 'Podcast', link: '/content/podcast' },
          { text: 'TikTok', link: '/content/tiktok' },
          { text: 'Events', link: '/content/events' },
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Mitglieder', link: '/community/mitglieder' },
          { text: 'Team', link: '/community/team' },
          { text: 'Partner', link: '/community/partner' },
        ]
      },
    ]
  }
})