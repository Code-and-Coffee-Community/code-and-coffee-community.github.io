---
description: Alle Programmier-TikTok kannst du dir hier anschauen.
---

<script setup>
import { reactive } from 'vue'

const state = reactive({ tiktoks: [] })

fetch('https://api.sheetson.com/v2/sheets/TikTok?' + new URLSearchParams({
    apiKey: 'b4CyrfsTCufxGj7my4eNonELlxNPepoZ6s1AqM0PVrljct8V-u9KCmoRLPVLDQ',
    spreadsheetId: '1PRaIqRnYl2kCCK1w7vFTAJv6GrNdK77bG9XhTn2UxNQ'
  }), { cache: 'no-cache' }
).then(response => response.json()).then(async json => {
  json.results.map(tiktok => {
    fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/${tiktok.author}/video/${tiktok.video_id}`)
    .then(response => response.json())
    .then(json => {
      state.tiktoks.push({
        ...tiktok,
        title: json.title,
        image_url: json.thumbnail_url
      })
    })
  })
})
</script>

# TikTok
>
<div class="flex flex-col gap-4 sm:flex-row">
  <a v-for="tiktok in state.tiktoks.reverse()" :href="`https://www.tiktok.com/${tiktok.author}/video/${tiktok.video_id}`" target="_blank" class="flex w-full bg-white border rounded-lg shadow-md sm:w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="w-2/5">
        <img class="object-cover w-full h-full rounded-none rounded-l-lg" :src="tiktok.image_url" :alt="tiktok.title">
      </div>
      <div class="flex flex-col justify-between w-3/5 p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ tiktok.title }}</h5>
        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{{ tiktok.date }} von {{ tiktok.author }}</p>
      </div>
  </a>
</div>

***
[![Code and Coffee Discord](https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2)](http://discord.code-n.coffee)