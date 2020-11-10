console.log('Beep beep!');

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.RUDBOT_TOKEN);

client.on('ready', () => {
    
    console.log("tá logado pai")
})

client.on('message', (msg) => {

    let canalBot = '775522793462825021'

    console.log(msg.content);
    if (msg.channel.id == canalBot && msg.content === 'o que você faz Rudbot?') {
        
        msg.reply('eu fumo makonha')
    }

    if (msg.channel.id == canalBot && msg.content === 'mas makonha não existem') {
        
        msg.channel.send('FUMEI TUDO PORRA')
    }
})
