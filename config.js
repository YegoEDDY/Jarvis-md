const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  VERSION: require('./package.json').version,
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: toBool(process.env.PORT) || 8000,
  PM_BLOCKER: toBool(process.env.PM_BLOCKER) || false,
  PM_BLOCKER_MSG: process.env.PM_BLOCKER_MSG || "_*Pm blocker active on this chat*_",
  AUDIO_DATA: process.env.AUDIO_DATA || '',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ANTILINK_MSG: process.env.ANTILINK_MSG || "",
  ANTIBOT_MSG: process.env.ANTIBOT_MSG || "",
  ANTIWORD_MSG: process.env.ANTIWORD_MSG || "",
  ALIVE_DATA : process.env.ALIVE_DATA || "",
  SESSION_ID: process.env.SESSION_ID || '',
  LANG: process.env.LANG || 'EN',
  SETVV: process.env.SETVV || 'DM',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLERS || process.env.HANDLER || process.env.PREFIX || '/',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "ᴊᴀʀᴠɪꜱ-ᴍᴅ", "body": "ᴀᴡᴇꜱᴏᴍᴇ 🍉", "thumbnailUrl": "https://i.imgur.com/OWJc4Qx.jpeg", "renderLargerThumbnail": true, "mediaType": 1, "mediaUrl": "", "sourceUrl": "https://github.com/Loki-Xer/Jarvis-md", "showAdAttribution": true}`,
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api-loki-ser-1o2h.onrender.com/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴊᴀʀᴠɪꜱ;ᴡᴀʙᴏᴛ',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || false,
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "false",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "false",
  MEDIA_DATA: process.env.MEDIA_DATA|| '',
  MENU_FONT: process.env.MENU_FONT || "0;0",
  SUDO: process.env.SUDO || '',
  STARTING_MSG: toBool(process.env.STARTING_MSG) || ,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'ᴊᴀʀᴠɪꜱ;ʟᴏᴋɪ-xᴇʀ;https://graph.org/file/1506e5842805b0968c5cf.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'public',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
