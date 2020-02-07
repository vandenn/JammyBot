const preprocessor = require('../preprocessor.js');

exports.getChwaziMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("chwazi"))
    return "";
  return "Chwazi!";
}