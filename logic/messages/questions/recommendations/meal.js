const globalConstants = require('../../../../constants/index.js');
const constants = require('./meal.constants.js');

const DEFAULT_MEAL_TYPE = "lunch";
exports.getMealRecommendationMessage = (type, object, action, details) => {
  if (type.match(/what/i)) {
    if (action.match(/eat/i)) {
      if (containsMealType(details)) {
        return getWhatRecommendationMessage(details);
      } else if (containsMealType(object)) {
        return getWhatRecommendationMessage(object)
      } else {
        return getWhatRecommendationMessage(DEFAULT_MEAL_TYPE);
      }
    } else if (action.match(/drink/i)) {
      if (containsDrinkType(object)) {
        return getWhatRecommendationMessage(object);
      } else {
        return getWhatRecommendationMessage(action);
      }
    } else if (globalConstants.causatives.includes(action)) {
      if (containsMealType(details)) {
        return getWhatRecommendationMessage(details);
      } else if (containsMealType(object)) {
        return getWhatRecommendationMessage(object)
      }
    }
  }
  return "";
};

const containsDrinkType = details => {
  return details.match(/(drink|alcohol)/i);
}

const containsMealType = details => {
  return details.match(/(breakfast|lunch|snack|dinner|drink|alcohol)/i);
}

const getWhatRecommendationMessage = details => {
  var food = "nothing";
  if (details.match(/breakfast[a-z]*/i))
    food = getBreakfastRecommendation();
  else if (details.match(/lunch[a-z]*/i) || details.match(/dinner[a-z]*/i))
    food = getHeavyMealRecommendation();
  else if (details.match(/snack[a-z]*/i))
    food = getSnackRecommendation();
  else if (details.match(/drink[a-z]*/i))
    food = getDrinksRecommendation();
  else if (details.match(/alcohol[a-z]*/i))
    food = getHardDrinksRecommendation();

  return `I dunno.. maybe ${food}?`;
}

const getBreakfastRecommendation = () => {
  return constants.breakfast[Math.floor(Math.random() * constants.breakfast.length)];
}

const getHeavyMealRecommendation = () => {
  return constants.heavy[Math.floor(Math.random() * constants.heavy.length)];
}

const getSnackRecommendation = () => {
  return constants.snack[Math.floor(Math.random() * constants.snack.length)];
}

const getDrinksRecommendation = () => {
  return constants.drinks[Math.floor(Math.random() * constants.drinks.length)];
}

const getHardDrinksRecommendation = () => {
  return constants.hardDrinks[Math.floor(Math.random() * constants.hardDrinks.length)];
}