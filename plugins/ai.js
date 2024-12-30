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

cmd(
    {
        pattern: "ai",
        desc: "💬 Chat with Gemini Pro AI",
        react: "🧠",
        category: "ai",
        filename: __filename,
    },
    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return reply("❗ Please provide a query. Usage: .ai [your message]");

            const response = await axios.get(`https://kaiz-apis.gleeze.com/api/gemini-pro`, {
                params: {
                    q: q,
                    uid: from, // Using the sender's ID dynamically
                },
                headers: {
                    Authorization: `Bearer ${config.GEMINI_API_KEY}`, // Pass API key if required
                },
            });

            const aiReply = `🤖 *Gemini Pro AI*:
${response.data.message}

*POWERED BY YASH*`;

            return reply(aiReply);
        } catch (e) {
            console.error("AI Command Error:", e.response?.data || e.message || e);
            return reply(
                "⚠️ An error occurred while fetching the AI response. Please check your query and try again."
            );
        }
    }
);
