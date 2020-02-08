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
  var possibleResponses = [
    `I can ${selectedFeature} I guess.`,
    `Dunno.. I can ${selectedFeature} or whatever.`,
    `Uhh.. I can probably ${selectedFeature}.`
  ]
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}