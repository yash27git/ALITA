
const config = require('../config');
const fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

cmd({
  pattern: "update",
  react: "🔄",
  desc: "Update folder from GitHub",
  category: "system",
  use: '.update',
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const repoUrl = 'https://github.com/mrfrank-ofc/SUBZERO-MD';
    const targetFolder = 'plugins';

    // Check if target folder exists
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
    }

    // Determine the correct Git command
    const gitCommand = fs.existsSync(`${targetFolder}/.git`) ? 
      `git -C ${targetFolder} pull` : 
      `git clone ${repoUrl} ${targetFolder}`;

    // Execute the Git command
    await new Promise((resolve, reject) => {
      exec(gitCommand, (err, stdout, stderr) => {
        if (err) {
          reject(`Git command failed: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });

    // Check if there were any updates
    const updateOutput = await exec(`git -C ${targetFolder} status`);
    if (updateOutput.stdout.includes("up to date")) {
      await conn.sendMessage(from, { text: '*All plugins are up to date!*' }, { quoted: mek });
    } else {
      await conn.sendMessage(from, { text: '*✅ Alita Updated completed successfully!*' }, { quoted: mek });
    }
  } catch (error) {
    console.error(error);
    reply(`*Error during update:* ${error.message}`);
  }
});
