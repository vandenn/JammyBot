const axios = require('axios');
const logger = require('../logger.js');

exports.getWeatherMessage = async (city = 'taiwan') => {
  logger.info(`City: ${city}`);
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