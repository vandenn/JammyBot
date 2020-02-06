const logger = require('../logger.js');

const preprocessor = require('./preprocessor.js');
const opinion = require('./messages/opinion.js');
const howareyou = require('./messages/howareyou.js');
const weather = require('./messages/weather.js');
const goodbye = require('./messages/goodbye.js');

const DEFAULT_RESPONSE = "Wanna fight, punk?!";

module.exports = async text => {
  text = preprocessor.initialPreprocess(text);
  if (!checkIfNameWasCalled(text))
    return [];

  // Messages should be pushed in order of priority.
  messages = [];
  messages.push(opinion.getOpinionMessage(text));
  messages.push(howareyou.getHowAreYouMessage(text));
  messages.push(await weather.getWeatherMessage(text));
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