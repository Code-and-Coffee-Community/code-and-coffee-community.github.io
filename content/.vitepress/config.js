import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../docs',
  lastUpdated: true,
  lang: 'de-DE',
  themeConfig: {
    siteTitle: 'Code & Coffee',
    logo: '/images/logo.png',
    nav: [
      { text: 'Impressum', link: '/impressum.html' },
      { text: 'Datenschutz', link: '/datenschutz.html' },
    ],
    socialLinks: [
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
      {
        text: 'Anfrage',
        items: [
          { text: 'Kontakt', link: '/anfrage/kontakt' },
          { text: 'Kooperation', link: '/anfrage/kooperation' }
        ]
      }
    ]
  }
})