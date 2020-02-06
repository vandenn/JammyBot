const environment = process.env.NODE_ENV || "development";
if (environment === "development") {
  require('dotenv').config();
}

var Discord = require('discord.js');
var logger = require('./logger.js');

// Initialize Discord Bot
var client = new Discord.Client();

client.on('ready', () => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(client.user.username + ' - (' + client.user.id + ')');
});

var main = require('./logic/main.js');

client.on('message', async message => {
  var responses = await main(message.content);

  responses.forEach(response => {
    message.channel.send(response);
  })
});

client.login(process.env.DISCORD_TOKEN);