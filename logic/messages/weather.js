const axios = require('axios');
const logger = require('../../logger.js');
const preprocessor = require('../preprocessor.js');

exports.getWeatherMessage = async text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.includes("weather"))
    return "";

  let city = undefined;
  let matches = text.match(/weather in ([A-z]+)/i);
  if (matches != null)
    city = matches[1];
  city = city || 'taiwan';

  let apiKey = process.env.WEATHER_API_KEY;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    let weather = response.data;
    if (weather.cod === "404")
      throw "City not found.";
    return `I told you, it said ${weather.weather[0].description} and ${Math.round(weather.main.temp - 273.15)} degrees in ${weather.name} or whatever.`;
  } catch (error) {
    logger.info(`Error: ${error.toString()}`);
    return "Dunno.. my phone won't show me for some reason.";
  }
}