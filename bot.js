require('dotenv').config();
var Discord = require('discord.io');
var logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
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
bot.on('message', function (user, userID, channelID, message, evt) {
  var words = message.split(' ');
  words.every(word => {
    if (/j[a-z]*l[a-z]*[ai]/i.test(word)) {
      bot.sendMessage({
        to: channelID,
        message: "Wanna fight, punk?!"
      });
      return false;
    }
    return true;
  })
});