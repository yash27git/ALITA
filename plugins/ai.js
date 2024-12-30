const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

require('dotenv').config(); // Load environment variables from .env file

cmd({
    pattern: "ai",
    desc: "💬 Chat with Gemini Pro AI",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            return reply("❗ Please provide a query. Usage: .ai [your message]");
        }

        // Replace "1" with a dynamic user ID or fallback to default
        const userId = conn.user?.id || "default";

        // Make sure to use the API key stored in the environment variables
        const response = await axios.get(`https://api.your-endpoint.com/chat`, {
            params: {
                q: q,
                uid: userId
            },
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` // Use API key from environment variables
            }
        });

        const aiReply = `🤖 *Gemini Pro AI*:
${response.data.message}

Query: "${q}"
*POWERED BY YASH*`;

        return reply(aiReply);
    } catch (e) {
        console.error("AI Command Error:", e); // Enhanced error logging
        return reply("⚠️ An error occurred while fetching the AI response. Please try again later.");
    }
});
