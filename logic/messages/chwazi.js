const preprocessor = require('../preprocessor.js');

exports.getChwaziMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (text.includes("chwazi"))
    return "Chwazi!";
  else if (text.match(/sh[aou]*la/i))
    return "It's pretty shala, man.";
  return "";
}