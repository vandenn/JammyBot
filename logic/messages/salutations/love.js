const preprocessor = require('../../preprocessor.js');

exports.getLoveMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  possibleResponses = [""];
  if (text.match(/lo+ve (u|ya|you)\b/)) {
    possibleResponses = [
      "Stooooop.",
      "Stop it!",
      "Stahp!"
    ];
  } else if (text.match(/lo+ve (me|us)\b/)) {
    possibleResponses = ["No."];
  } else if (text.match(/ha+te (me|us)\b/)) {
    possibleResponses = ["Yes.", "Yeah, pretty much."];
  }
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}