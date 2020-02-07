const preprocessor = require('../../preprocessor.js');

exports.getLoveMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  possibleResponses = [""];
  if (text.match(/lo+ve you\b/)) {
    possibleResponses = [
      "Stooooop.",
      "Stop it!",
      "Stahp!"
    ];
  } else if (text.match(/lo+ve me\b/)) {
    possibleResponses = ["No."];
  }
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}