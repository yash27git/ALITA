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
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "settings",

    react: "⚙️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
*⟝━━━⟢ *Alita BOT SETTINGS* ⟣━━━⟞*


*🔎 AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
    ➣ use .readstatus true or false 
    
*⛓️ MODE:* ➠ ${config.MODE} 
    ➣use .mode public or .mode private

*🧸 AUTO_VOICE:* ➠ ${config.AUTO_VOICE}
    ➣ use .autovoice true or false
    
*🎉 AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
    ➣ use .autosticker true or false

*📩 AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
   ➣ use .autoreply true or false

*🖼️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
   ➣ use .aliveimg url

*✅ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
   ➣ usw .setalive

*🚯 ANTI_LINK:* ➠ ${config.ANTI_LINK} 
   ➣ use .antilink true or false

*❌ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
   ➣  use .antibad true or false

*🕹️ PREFIX:* ➠ [${config.PREFIX}]
   ➣ use setprefix (symbol)

*🎙️ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING} 
   ➣ use .fakerecording true or false

*🎀 AUTO_REACT:* ➠ ${config.AUTO_REACT} 
   ➣ use autoreact true or false

*💙 HEART_REACT:* ➠ ${config.HEART_REACT} 
    ➣ use .heartreact true or false

 *👨‍💻* *OWNER_REACT:* ➠ ${config.OWNER_REACT} 
    ➣ use .ownereact true or false

*🤖* * BOT_NAME:* ➠ ${config.BOT_NAME}
    ➣ use setbotname (name)


> © ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴘᴀɴᴅᴇʏ ᴊɪ 

*◈┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◈*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
