import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽 𝙾 𝚄𝙽𝙰 𝙾𝚁𝙳𝙴𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙳𝙴 𝙲𝙷𝙰𝚃𝙶𝙿𝚃*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂 𝙳𝙴 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽𝙴𝚂 𝚈 𝙾𝚁𝙳𝙴𝙽𝙴𝚂*\n*◉ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*◉ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
await conn.sendPresenceUpdate('composing', m.chat)
var syms = `${jailbreak}`


let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
let gpt = `${hasill.result}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: gpt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {        
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
