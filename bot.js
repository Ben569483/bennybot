const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
     console.log('I am ready!');
     });
     
     client.on('message', message => {
          if (message.content === 'ping') {
             message.reply('pong');
          )
          });
          
          client.login(process.env.Mzk3NDczNDYwNDI0ODAyMzA2.DSwkmw.Z2MwOQm2voJ2RVLcoBRGoVLvgOM);
