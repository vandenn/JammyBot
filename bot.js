const environment = process.env.NODE_ENV || "development";
if (environment === "development") {
  require('dotenv').config();
}

var Discord = require('discord.io');
var logger = require('./logger.js');

// Initialize Discord Bot
var bot = new Discord.Client({
  token: process.env.DISCORD_TOKEN,
  autorun: true
});

bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

var main = require('./logic/main.js');

bot.on('message', async function (user, userID, channelID, message, evt) {
  var responses = await main(message);

  responses.forEach(response => {
    bot.sendMessage({
      to: channelID,
      message: response
    });
  })
});