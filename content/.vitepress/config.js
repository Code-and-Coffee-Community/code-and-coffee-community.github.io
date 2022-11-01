import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../docs',
  themeConfig: {
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