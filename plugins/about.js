/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
     ＡＬＩＴＡ  ＷＨＡＴＳＡＰＰ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＰＡＮＤＥＹ ＪＩ 
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/yash27git/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["darrell"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM Alita*\n\n
I am  WhatsApp Based Multi Device Bot Created By PANDEY JI from India.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.
\n\n *For More Visit My Telegram*: https://t.me/PandeyJi55555/

━━━━━━━━━━━━━━━━━━━━━━━━

> *SOURCE CODE* 
⛓️ https://github.com/yash27git/ALITA

> *FOLLOW OWNER* 
🛠️ https://github.com/yash27git/

> *OWNER'S WHATSAPP*
🪪 https://wa.me/917275383838/?text=Alita+Fan+Here

> *DEVELOPER's WHATSAPP* 
🪪 https://wa.me/918853055109/?text=YASH+Fan+Here

> *FOLLOW INSTAGRAM* 
🎀https://instagram.com/___yash_27/

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *RELEASE DATE* - *31 December 2024*
 
> *PANDEY JI*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
