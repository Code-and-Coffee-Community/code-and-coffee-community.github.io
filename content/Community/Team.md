---
description: Unser Team ist ein wichtiger Bestandteil der Community und sorgt dafür, dass es läuft!
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/images/team/oli.jpg',
    name: 'Oli',
    title: 'Founder',
    desc: '',
    links: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>' }, link: 'https://tiktok.com/@oliverjessner' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/oliverjessner' },
      { icon: 'youtube', link: 'https://www.youtube.com/@oliverjessner' }
    ]
  },
  {
    avatar: '/images/team/jonathan.jpg',
    name: 'Jonathan',
    title: 'Founder',
    desc: '',
    links: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>' }, link: 'https://tiktok.com/@jonathanschndr' },
      { icon: 'twitter', link: 'https://twitter.com/JonathanSchndr' },
      { icon: 'github', link: 'https://github.com/JonathanSchndr' }
    ]
  },
  {
    avatar: '/images/team/ary.jpg',
    name: 'Ary',
    title: 'Admin',
    desc: '',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/988408114212667422' },
      { icon: 'github', link: 'https://github.com/shicenice' }
    ]
  },
]
</script>

# Unser Team

<VPTeamMembers size="medium" :members="members" />

***

::: details Möchtest du in das Team?
Für das Team kann man sich nicht aktiv bewerben. Wenn du einen Teil zur Community beiträgst und positiv auffällst, werden wir dich automatisch ansprechen.
:::

***
[![Code and Coffee Discord](https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2)](http://discord.code-n.coffee)