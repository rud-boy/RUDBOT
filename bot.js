console.log('Beep beep!');

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.RUDBOT_TOKEN);
