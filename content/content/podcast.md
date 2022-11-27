---
description: Unseren Podcast über das Thema Entwicklung und Programmierung findest du hier.
---

<script setup>
import { reactive } from 'vue'

const state = reactive({ podcasts: [] })

fetch('https://api.sheetson.com/v2/sheets/Podcast?' + new URLSearchParams({
    apiKey: 'b4CyrfsTCufxGj7my4eNonELlxNPepoZ6s1AqM0PVrljct8V-u9KCmoRLPVLDQ',
    spreadsheetId: '1PRaIqRnYl2kCCK1w7vFTAJv6GrNdK77bG9XhTn2UxNQ'
  }), { cache: 'no-cache' }
).then(response => response.json()).then(json => {
  state.podcasts = json.results.reverse()
})
</script>

# Podcast
>
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <a v-for="podcast in state.podcasts" :href="`https://www.youtube.com/watch?v=${podcast.video_id}`" target="_blank" class="flex w-full bg-white border rounded-lg shadow-md sm:w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="w-2/5">
        <iframe class="object-cover w-full h-full rounded-none rounded-l-lg" width="100%" height="100%" :src="`https://www.youtube.com/embed/${podcast.video_id}?controls=0`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="flex flex-col justify-between w-3/5 p-4 leading-normal">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ podcast.title }}</h5>
        <p class="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {{ podcast.duration }} – {{ podcast.episode }}
        </p>
        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {{ podcast.date }} mit {{ podcast.participant }}
        </p>
      </div>
  </a>
</div>

***
[![Code and Coffee Discord](https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2)](http://discord.code-n.coffee)