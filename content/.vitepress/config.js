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
        text: 'Postcast',
        items: [
          { text: 'Aktuell', link: '/podcast/aktuell' },
          { text: 'Archiv', link: '/podcast/archiv' },
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