const express = require('express');
const app = express();
const port = 3000;
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

//--------------------------------------------------------//

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

// =================BURAYA BAKARLAR =================== //

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply({
      content: 'pong',
    })
  }
});
client.on('message', function(message) {
  if (message.content.split('').join('') === '!roll') {
    return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
  }
});
client.on('messageCreate', (message) => {
  if (message.content === 'Merhaba') {
    message.reply({
      content: 'Merhabaa',
    })
  }
}); client.on('messageCreate', (message) => {
  if (message.content === 'Naber') {
    message.reply({
      content: 'ii sn',
    })
  }
});

client.on('message', (message) => {
  if (message.content === 'Selam') {
    message.reply({
      content: 'Selamm',
    })
  }
});
client.on('message', (message) => {
  if (message.content === 'Görüşürüz') {
    message.reply({
      content: "Görüşürüzzz",
    })
  }
});

client.login('MTAwODg4MDkwMDI0ODk4MTU4Ng.GHNL5h.A2AAcj0lnQNui7nEg1Gi-Nqy6i3fH0jES0U96s');
