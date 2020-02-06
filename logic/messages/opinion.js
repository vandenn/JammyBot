const preprocessor = require('../preprocessor.js');

exports.getOpinionMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("i think") && !text.includes("maybe"))
    return "";
  return "No one asked for your opinion!";
}