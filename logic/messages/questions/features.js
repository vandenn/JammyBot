const preprocessor = require('../../preprocessor.js');
const constants = require('../../../constants/index.js');

exports.getFeaturesMessage = text => {
  var text = preprocessor.removeNonAlphanumeric(text);
  var auxiliaryString = `(${constants.auxiliaries.join('|')})`;
  var pattern = new RegExp(
    `what ${auxiliaryString} (u|ya|you) do`
  )
  if (!text.match(pattern))
    return "";
  var selectedFeature = constants.features[Math.floor(Math.random() * constants.features.length)];
  return `I can ${selectedFeature} I guess.`;
}