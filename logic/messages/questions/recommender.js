const logger = require('../../../logger.js');
const preprocessor = require('../../preprocessor.js');
const constants = require('../../../constants/main.js');
const mealRecommender = require('./recommendations/meal.js');
const clothesRecommender = require('./recommendations/clothes.js');

exports.getRecommendationMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  var questionTypeString = `(${constants.questionTypes.join('|')})`;
  var auxiliaryString = `(${constants.auxiliaries.join('|')})`;
  var queryPattern = new RegExp(
    `${questionTypeString}([A-z ]*) ${auxiliaryString} [A-z]+ ([A-z]+)(.*)`, "i"
  )
  var matches = text.match(queryPattern);
  if (!matches) {
    return "";
  }

  var type = matches[1];
  var object = matches[2];
  var action = matches[4];
  var details = matches[5];

  var messages = [];
  messages.push(mealRecommender.getMealRecommendationMessage(type, object, action, details));
  messages.push(clothesRecommender.getClothesRecommendationMessage(type, object, action, details));

  messages = messages.filter(message => message);
  if (messages.length > 0)
    return messages[0];
  return "";
}
