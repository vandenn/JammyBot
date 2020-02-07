const preprocessor = require('../../preprocessor.js');

exports.getHowAreYouMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("how are y"))
    return "";
  possibleResponses = [
    "I'm fine.",
    "I'm good.",
    "Wow, you actually care for me.",
    "I'm ok, just really tired.",
    "I'm really tired from school."
  ];
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}