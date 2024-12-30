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
    pattern: "menu2",
    react: "⚡",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*▢─────────────────▢*
*Hello Dear👋,  ${pushname}*
*▢─────────────────▢*

━━━━━━━━━━━━━━━━━━━━
> ALITA COMMAND LIST 2
━━━━━━━━━━━━━━━━━━━━
 *https://github.com/yash27git/SUBZERO-MD*
━━━━━━━━━━━━━━━━━━━━

*MADE BY PANDEY JI*

*▢───────────────▢*
  ◈  *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*
*╭───────────────▢*
  ◈ r${menu.download}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*
*╭───────────────▢*
  ◈ ${menu.main}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.group}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.owner}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.convert}
*┕───────────────▢*

*╭─────────────────▢*
*◈* *sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs*
*┕─────────────────▢*

*╭───────────────▢*
  ◈  ${menu.search}
*┕───────────────▢*

*▢▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▢*⁠⁠⁠⁠

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀɴᴅᴇʏ ᴊɪ*

*▢▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▢
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
