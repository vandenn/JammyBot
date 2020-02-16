const features = require('./features.js');
const weather = require('./weather.js');
const news = require('./news.js');
const recommender = require('./recommender.js');
const time = require('./time.js');
const math = require('./math.js');
const eightball = require('./eightball.js');

exports.getMessages = async text => {
  var messages = [];
  messages.push(features.getFeaturesMessage(text));
  messages.push(await weather.getWeatherMessage(text));
  messages.push(await news.getNewsMessage(text));
  messages.push(await recommender.getRecommendationMessage(text));
  messages.push(time.getTimeMessage(text));
  messages.push(math.getMathMessage(text));
  messages = messages.filter(message => message);
  if (messages.length > 0) return messages;
  else return [eightball.getEightBallMessage(text)];
};
