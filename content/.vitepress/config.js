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
        text: 'Community',
        items: [
          { text: 'Mitglieder', link: '/community/mitglieder' },
          { text: 'Team', link: '/community/team' },
          { text: 'Partner', link: '/community/partner' },
        ]
      },
      {
        text: 'LIVE',
        items: [
          { text: 'Podcast', link: '/live/podcast' },
          { text: 'TikTok', link: '/live/tiktok' },
          { text: 'Events', link: '/live/events' }
        ]
      },
      {
        text: 'Anfrage',
        items: [
          { text: 'Kontakt', link: '/anfrage/kontakt' },
          { text: 'Kooperation', link: '/anfrage/kooperation' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Impressum', link: '/impressum' },
          { text: 'Datenschutz', link: '/datenschutz' },
        ]
      },
    ]
  }
})