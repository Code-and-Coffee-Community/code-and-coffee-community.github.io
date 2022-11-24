---
description: Wir sind sehr happy, über unsere Mitglieder. Hier findest du unser Verzeichnis.
---

<script setup>
import { ref } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

const members = ref([])
fetch('https://discord.com/api/guilds/889432631672983562/widget.json').then(response => response.json()).then(json => {
  json.members.map(member => {
    members.value.push({
      avatar: member.avatar_url,
      name: member.username,
      title: member.status
    })
  })
})
</script>

# Unsere Mitglieder
Online: {{ members.length }}

<VPTeamMembers size="small" :members="members.sort((a, b) => 0.5 - Math.random())" />

***

::: details Möchtest du Mitglied werden?
Dann join einfach auf unseren Discord! Die Mitgliedschaft ist 100% kostenfrei! Wir freuen uns auf dich. :green_heart:
:::

***
[![Code and Coffee Discord](https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2)](http://discord.code-n.coffee)