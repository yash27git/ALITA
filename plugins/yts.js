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
const { cmd } = require('../command');
const yts = require("yt-search");

cmd(
    {
        pattern: "yts",
        alias: ["ytsearch"],
        use: ".yts [search query]",
        react: "🔎",
        desc: "Search and get details from YouTube.",
        category: "search",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        { from, q, reply }
    ) => {
        try {
            if (!q) return reply("*❗ Please provide a search query. Usage: .yts [search query]*");

            // Perform the YouTube search
            const searchResults = await yts(q);

            // Check if results are available
            if (!searchResults || !searchResults.all.length) {
                return reply("*❌ No results found. Try a different query.*");
            }

            // Format the results
            let message = `*🔎 YouTube Search Results for:* _"${q}"_\n\n`;
            searchResults.all.slice(0, 5).forEach((video, index) => {
                message += `*${index + 1}. ${video.title}*\n🔗 ${video.url}\n⏳ Duration: ${video.timestamp}\n📅 Uploaded: ${video.ago}\n\n`;
            });

            // Send the formatted results
            await conn.sendMessage(from, { text: message }, { quoted: mek });
        } catch (error) {
            console.error("Error in .yts command:", error);
            reply("*⚠️ An error occurred while searching YouTube. Please try again later.*");
        }
    }
);

