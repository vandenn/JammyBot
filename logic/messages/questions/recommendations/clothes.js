const globalConstants = require('../../../../constants/index.js');
const constants = require('./clothes.constants');

exports.getClothesRecommendationMessage = (type, object, action, details) => {
  if (type.match(/what/i)) {
    if (action.match(/wear/i) || action.match(/dress/i)) {
      return getWhatRecommendationMessage();
    }
  }
  return "";
}

const getWhatRecommendationMessage = () => {
  var clothesType = constants.types[Math.floor(Math.random() * constants.types.length)];
  return `Why are you asking me? I dunno.. how about your ${clothesType}?`;
}