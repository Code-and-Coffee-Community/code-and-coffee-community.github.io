import{r as i,o as a,c as r,a as e,F as d,e as c,d as h,t as n}from"./app.8688ebe9.js";const u=e("h1",{id:"tiktok",tabindex:"-1"},[h("TikTok "),e("a",{class:"header-anchor",href:"#tiktok","aria-hidden":"true"},"#")],-1),_=e("blockquote",null,null,-1),m={class:"flex flex-col gap-4 sm:flex-row"},k=["href"],f={class:"w-2/5"},g=["src","alt"],p={class:"flex flex-col justify-between w-3/5 p-4 leading-normal"},w={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},b={class:"mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"},x=e("hr",null,null,-1),v=e("p",null,[e("a",{href:"http://discord.code-n.coffee",target:"_blank",rel:"noreferrer"},[e("img",{src:"https://discordapp.com/api/guilds/889432631672983562/widget.png?style=banner2",alt:"Code and Coffee Discord"})])],-1),C=JSON.parse('{"title":"TikTok","description":"Alle Programmier-TikTok kannst du dir hier anschauen.","frontmatter":{"description":"Alle Programmier-TikTok kannst du dir hier anschauen."},"headers":[],"relativePath":"content/tiktok.md","lastUpdated":1669571039000}'),T={name:"content/tiktok.md"},N=Object.assign(T,{setup(y){const l=i({tiktoks:[]});return fetch("https://api.sheetson.com/v2/sheets/TikTok?"+new URLSearchParams({apiKey:"b4CyrfsTCufxGj7my4eNonELlxNPepoZ6s1AqM0PVrljct8V-u9KCmoRLPVLDQ",spreadsheetId:"1PRaIqRnYl2kCCK1w7vFTAJv6GrNdK77bG9XhTn2UxNQ"}),{cache:"no-cache"}).then(o=>o.json()).then(o=>{for(const s of o.results.reverse())fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/${s.author}/video/${s.video_id}`).then(t=>t.json()).then(t=>{l.tiktoks.push({...s,title:t.title,image_url:t.thumbnail_url})})}),(o,s)=>(a(),r("div",null,[u,_,e("div",m,[(a(!0),r(d,null,c(l.tiktoks,t=>(a(),r("a",{href:`https://www.tiktok.com/${t.author}/video/${t.video_id}`,target:"_blank",class:"flex w-full bg-white border rounded-lg shadow-md sm:w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},[e("div",f,[e("img",{class:"object-cover w-full h-full rounded-none rounded-l-lg",src:t.image_url,alt:t.title},null,8,g)]),e("div",p,[e("h5",w,n(t.title),1),e("p",b,n(t.date)+" von "+n(t.author),1)])],8,k))),256))]),x,v]))}});export{C as __pageData,N as default};
