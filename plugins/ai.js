/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
     ＡＬＩＴＡ  ＷＨＡＴＳＡＰＰ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＰＡＮＤＥＹ ＪＩ 
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/yash27git/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


  const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ai",
    desc: "💬 Chat with Gemini Pro AI",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a query. Usage: .ai [your message]");

        const response = await axios.get(`https://kaiz-apis.gleeze.com/api/gemini-pro`, {
            params: {
                q: q,
                uid: "1" // You might want to make this dynamic based on user ID
            }
        });

        const aiReply = `🤖 *Gemini Pro AI*:
${response.data.message}

*POWERED BY YASH*`;

        return reply(aiReply);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching AI response. Please try again later.");
    }
});