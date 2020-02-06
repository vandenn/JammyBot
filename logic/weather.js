const axios = require('axios');

exports.getWeatherMessage = async () => {
  let apiKey = process.env.WEATHER_API_KEY;
  let city = 'taiwan';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appId=${apiKey}`;

  try {
    const response = await axios.get(url);
    let weather = JSON.parse(response.body);
    return `I told you, it said ${weather.weather.description} and ${weather.main.temp} degrees in ${weather.name} or whatever.`;
  } catch (error) {
    return "Dunno.. my phone won't show me for some reason.";
    console.log(error);
  }
}