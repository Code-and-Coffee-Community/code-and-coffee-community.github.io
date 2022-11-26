---
description: Alle Events und Veranstaltungen im Überblick.
---

<script setup>
import { reactive } from 'vue'

const state = reactive({ events: [] })

fetch('https://api.sheetson.com/v2/sheets/Events?' + new URLSearchParams({
    apiKey: 'b4CyrfsTCufxGj7my4eNonELlxNPepoZ6s1AqM0PVrljct8V-u9KCmoRLPVLDQ',
    spreadsheetId: '1PRaIqRnYl2kCCK1w7vFTAJv6GrNdK77bG9XhTn2UxNQ'
  }), { cache: 'no-cache' }
).then(response => response.json()).then(json => {
  state.events = json.results
})
</script>

# Events
>
<ol class="!list-none relative border-l border-gray-200 dark:border-gray-700">
    <li v-for="event in state.events" class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-green-900 dark:bg-green-900">
            <svg aria-hidden="true" class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ event.title }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ event.date }}</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ event.desc }}</p>
        <a v-if="event.join_url" :href="event.join_url" target="_blank" type="button" class="!text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Teilnehmen
          <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </li>
</ol>


***
[![Code and Coffee Discord](https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2)](http://discord.code-n.coffee)