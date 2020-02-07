const logger = require('../logger.js');

const preprocessor = require('./preprocessor.js');
const opinion = require('./messages/opinion.js');
const chwazi = require('./messages/chwazi.js');
const questions = require('./messages/questions/main.js');
const advice = require('./messages/advice.js');
const joke = require('./messages/joke.js');
const salutations = require('./messages/salutations/main.js');

const DEFAULT_RESPONSE = "Wanna fight, punk?!";

module.exports = async text => {
  text = preprocessor.initialPreprocess(text);
  if (!checkIfNameWasCalled(text))
    return [];

  // Messages should be pushed in order of priority.
  messages = [];
  messages.push(opinion.getOpinionMessage(text));
  messages.push(chwazi.getChwaziMessage(text));
  messages.push(...(await questions.getMessages(text)));
  messages.push(await advice.getAdviceMessage(text));
  messages.push(await joke.getJokeMessage(text));
  messages.push(...(salutations.getMessages(text)));

  messages = messages.filter(message => message);
  if (messages.length <= 0) {
    messages.push(DEFAULT_RESPONSE);
  }
  return messages;
}

const checkIfNameWasCalled = (text) => {
  return text.match(/j[a-z]*l[a-z]*[ai]/i) && !text.match(/real j[a-z]*l[a-z]*[ai]/i);
}