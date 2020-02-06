const environment = process.env.NODE_ENV || "development";
if (environment === "development") {
  require('dotenv').config();
}

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
  var saidBye = false;
  var wasJammyCalled = false;
  words.forEach(word => {
    var preprocessed_word = word.toLowerCase();
    if (/j[a-z]*l[a-z]*[ai]/i.test(preprocessed_word)) {
      wasJammyCalled = true;
    }
    if (preprocessed_word === "bye" || preprocessed_word === "goodbye") {
      saidBye = true;
    }
  });

  var message = "";
  if (wasJammyCalled) {
    message = "Wanna fight, punk?!";
    if (saidBye) {
      message = "Fine. Whatever! Just go!";
    }
  }

  if (message.length > 0) {
    bot.sendMessage({
      to: channelID,
      message
    });
  }
});