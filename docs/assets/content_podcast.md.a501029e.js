import{r as d,o as r,c as o,a as e,F as c,e as l,d as i,t as s}from"./app.8688ebe9.js";const h=e("h1",{id:"podcast",tabindex:"-1"},[i("Podcast "),e("a",{class:"header-anchor",href:"#podcast","aria-hidden":"true"},"#")],-1),u=e("blockquote",null,null,-1),p={class:"flex flex-col gap-4 sm:flex-row"},_=["href"],m={class:"w-2/5"},g=["src"],f={class:"flex flex-col justify-between w-3/5 p-4 leading-normal"},b={class:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},w={class:"mb-1 text-sm font-normal text-gray-700 dark:text-gray-400"},x={class:"mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"},y=e("hr",null,null,-1),v=e("p",null,[e("a",{href:"http://discord.code-n.coffee",target:"_blank",rel:"noreferrer"},[e("img",{src:"https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2",alt:"Code and Coffee Discord"})])],-1),T=JSON.parse('{"title":"Podcast","description":"Unseren Podcast \xFCber das Thema Entwicklung und Programmierung findest du hier.","frontmatter":{"description":"Unseren Podcast \xFCber das Thema Entwicklung und Programmierung findest du hier."},"headers":[],"relativePath":"content/podcast.md","lastUpdated":1669569879000}'),k={name:"content/podcast.md"},j=Object.assign(k,{setup(P){const n=d({podcasts:[]});return fetch("https://api.sheetson.com/v2/sheets/Podcast?"+new URLSearchParams({apiKey:"b4CyrfsTCufxGj7my4eNonELlxNPepoZ6s1AqM0PVrljct8V-u9KCmoRLPVLDQ",spreadsheetId:"1PRaIqRnYl2kCCK1w7vFTAJv6GrNdK77bG9XhTn2UxNQ"}),{cache:"no-cache"}).then(a=>a.json()).then(a=>{n.podcasts=a.results.reverse()}),(a,C)=>(r(),o("div",null,[h,u,e("div",p,[(r(!0),o(c,null,l(n.podcasts,t=>(r(),o("a",{href:`https://www.youtube.com/watch?v=${t.video_id}`,target:"_blank",class:"flex w-full bg-white border rounded-lg shadow-md sm:w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},[e("div",m,[e("iframe",{class:"object-cover w-full h-full rounded-none rounded-l-lg",width:"100%",height:"100%",src:`https://www.youtube.com/embed/${t.video_id}?controls=0`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,g)]),e("div",f,[e("h5",b,s(t.title),1),e("p",w,s(t.duration)+" \u2013 "+s(t.episode),1),e("p",x,s(t.date)+" mit "+s(t.participant),1)])],8,_))),256))]),y,v]))}});export{T as __pageData,j as default};