/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
     ＡＬＩＴＡ  ＷＨＡＴＳＡＰＰ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＰＡＮＤＥＹ ＪＩ 
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/yash27git/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const {cmd , commands} = require('../command')

cmd({
    pattern: "alitaimg",
    desc: "alita the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *ALITA PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0001.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0002.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0003.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0004.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0005.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0006.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://raw.githubusercontent.com/yash27git/ALITA/refs/heads/main/Alita/IMG-20241228-WA0007.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
