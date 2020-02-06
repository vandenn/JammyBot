const preprocessor = require('../preprocessor.js');

exports.getThanksMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("thank"))
    return "";
  return "Whatever.";
}