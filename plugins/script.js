/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
     ＡＬＩＴＡ  ＷＨＡＴＳＡＰＰ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＰＡＮＤＥＹ ＪＩ 
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/yash27git/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*⟣━━━━━━━━━━━━━━━━━━━⟢*
 *BOT OWNER:*
 
> *PANDEY JI*

 *Alita REPO:*
 
> *https://github.com/yash27git/ALITA*

 *SUPPORT GROUP:*
 
> *https://t.me/PandeyJi55555*

 *DEVELOPER NUMBER:*
 
> *wa.me/+918853055109/*

*⟣━━━━━━━━━━━━━━━━━━━⟢*
> *CREATED BY PANDEY JI*
*⟣━━━━━━━━━━━━━━━━━━━⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "ALITA",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ALITA',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/yash27git/ALITA" ,
thumbnailUrl: "https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/ALITA%20DEVLOPER%20IMG.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
