const preprocessor = require('../../preprocessor.js');

exports.getFeedbackMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (text.match(/good job/i))
    return "Why, thank you.";
  else if (text.match(/(bad|terrible) job/i)) {
    possibleResponses = [
      "W o w. Okay. Okaaaay.",
      "Nye nye bAD jOb nyeh.",
      "Whatever. WHAT eh ver.",
      "Jeez.. what did I do to deserve this?",
      "I'm literally offended right now. NGL, not gonna lie."
    ]
    return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
  }
  return "";
}