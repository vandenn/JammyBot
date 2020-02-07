const preprocessor = require('../../preprocessor.js');

exports.getEightBallMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("answer me"))
    return "";
  possibleResponses = [
    "Yeah.",
    "I dunno.",
    "No.",
    "I'm too tired to answer."
  ];
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}