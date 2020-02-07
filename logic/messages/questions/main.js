const weather = require('./weather.js');
const mealRecommendation = require('./mealRecommendation.js');
const time = require('./time.js');
const eightball = require('./eightball.js');

exports.getMessage = async text => {
  var message = "";
  if (message = await weather.getWeatherMessage(text))
    return message;
  else if (message = mealRecommendation.getMealRecommendationMessage(text))
    return message;
  else if (message = time.getTimeMessage(text))
    return message;
  else
    return eightball.getEightBallMessage(text);
}