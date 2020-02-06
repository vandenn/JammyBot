const preprocessor = require('./preprocessor.js');
const weather = require('./messages/weather.js');
const goodbye = require('./messages/goodbye.js');

const DEFAULT_RESPONSE = "Wanna fight, punk?!";

module.exports = async text => {
  text = preprocessor.initialPreprocess(text);
  if (!checkIfNameWasCalled(text))
    return [];

  messages = [];
  messages.push(await weather.getWeatherMessage(text));
  messages.push(goodbye.getGoodbyeMessage(text));

  if (!messages.some(message => message) || messages.length <= 0)
    messages.push(DEFAULT_RESPONSE);
  return messages;
}

const checkIfNameWasCalled = (text) => {
  return text.match(/j[a-z]*l[a-z]*[ai]/i) && !text.match(/real j[a-z]*l[a-z]*[ai]/i);
}