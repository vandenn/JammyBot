const logger = require('../../logger.js');
const preprocessor = require('../preprocessor.js');

exports.getMealRecommendationMessage = text => {
  text = preprocessor.removeNonAlphanumeric(text);
  matches = text.match(/what should i have for (breakfast[a-z]*|lunch[a-z]*|snack[a-z]*|dinner[a-z]*|drinks[a-z]*)/i);
  if (!matches)
    return "";
  mealType = matches[1];

  food = "nothing";
  if (mealType.match(/breakfast[a-z]*/i))
    food = getBreakfastRecommendation();
  else if (mealType.match(/lunch[a-z]*/i) || mealType.match(/dinner[a-z]*/i))
    food = getHeavyMealRecommendation();
  else if (mealType.match(/snack[a-z]*/i))
    food = getSnackRecommendation();
  else if (mealType.match(/drinks[a-z]*/i))
    food = getDrinksRecommendation();

  return `I dunno.. maybe ${food}?`;
}

const getBreakfastRecommendation = () => {
  var choices = [
    "pancakes", "bacon", "toast", "longganisa", "pandesal", "hotdog", "sausage",
    "champorado", "oatmeal", "cereals", "tapa", "omelette", "sunny-side up"
  ]
  return choices[Math.floor(Math.random() * choices.length)];
}

const getHeavyMealRecommendation = () => {
  var choices = [
    "sinigang", "nilaga", "fried chicken", "adobo", "afritada", "caldereta", "menudo",
    "mechado", "pork chops", "stroganoff"
  ]
  return choices[Math.floor(Math.random() * choices.length)];
}

const getSnackRecommendation = () => {
  var choices = [
    "arroz caldo", "pancit canton", "pandesal", "a granola bar", "chocolate", "chips",
    "leftovers", "hard-boiled eggs", "toast"
  ]
  return choices[Math.floor(Math.random() * choices.length)];
}

const getDrinksRecommendation = () => {
  var choices = [
    "water", "soda", "apple juice", "juice", "milk", "milk tea", "yakult", "tea", "coffee",
    "cabarnet sauvignon"
  ]
  return choices[Math.floor(Math.random() * choices.length)];
}