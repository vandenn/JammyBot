const preprocessor = require('../preprocessor.js');

exports.getTimeMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("what time is it") && !text.includes("whats the time"))
    return "";
  possibleResponses = [
    "You blind?",
    "You dumb?",
    "You actually blind?",
    "You actually dumb?"
  ];
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}