const preprocessor = require('../../preprocessor.js');

exports.getThanksMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.match(/tha+nk/i) && !text.match(/t[hn]+x/i))
    return "";
  return "Whatever.";
}