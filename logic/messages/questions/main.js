const weather = require('./weather.js');
const recommender = require('./recommender.js');
const time = require('./time.js');
const eightball = require('./eightball.js');

exports.getMessages = async text => {
  var messages = [];
  messages.push(await weather.getWeatherMessage(text));
  messages.push(recommender.getRecommendationMessage(text));
  messages.push(time.getTimeMessage(text));
  messages = messages.filter(message => message);
  if (messages.length > 0)
    return messages;
  else
    return [eightball.getEightBallMessage(text)];
}