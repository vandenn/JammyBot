const preprocessor = require('../../preprocessor.js');

exports.getComplimentMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.match(/good job/i))
    return "";
  return "Why, thank you.";
}