const logger = require('../logger.js');

const preprocessor = require('./preprocessor.js');
const opinion = require('./messages/opinion.js');
const howAreYou = require('./messages/howAreYou.js');
const eightball = require('./messages/eightball.js');
const weather = require('./messages/weather.js');
const mealRecommendation = require('./messages/mealRecommendation.js');
const thanks = require('./messages/thanks.js');
const goodbye = require('./messages/goodbye.js');

const DEFAULT_RESPONSE = "Wanna fight, punk?!";

module.exports = async text => {
  text = preprocessor.initialPreprocess(text);
  if (!checkIfNameWasCalled(text))
    return [];

  // Messages should be pushed in order of priority.
  messages = [];
  messages.push(opinion.getOpinionMessage(text));
  messages.push(howAreYou.getHowAreYouMessage(text));
  messages.push(eightball.getEightBallMessage(text));
  messages.push(await weather.getWeatherMessage(text));
  messages.push(mealRecommendation.getMealRecommendationMessage(text));
  messages.push(thanks.getThanksMessage(text));
  messages.push(goodbye.getGoodbyeMessage(text));

  if (!messages.some(message => message) || messages.length <= 0) {
    messages = [];
    messages.push(DEFAULT_RESPONSE);
  }
  messages = messages.filter(message => message);
  return messages;
}

const checkIfNameWasCalled = (text) => {
  return text.match(/j[a-z]*l[a-z]*[ai]/i) && !text.match(/real j[a-z]*l[a-z]*[ai]/i);
}