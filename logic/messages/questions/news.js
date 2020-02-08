const axios = require('axios');
const logger = require('../../../logger.js');
const preprocessor = require('../../preprocessor.js');

// Powered by newsapi.org
// https://newsapi.org
exports.getNewsMessage = async text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.match(/(news|headline)[A-z]*\b/i))
    return "";

  let country = undefined;
  let matches = text.match(/(news|headline)[A-z]* in (the )*([A-z]+)/i);
  if (matches != null)
    country = matches[3];
  country = country || 'usa';
  let countryCode = await getCountryCode(country);
  logger.info(countryCode);

  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status !== "ok" || response.data.articles.length <= 0)
      throw "Error with result. Status not ok.";
    const { articles } = response.data;
    const selectedArticle = articles[Math.floor(Math.random() * articles.length)];
    return `Oh lemme check one shekund.. there's one here that said "${selectedArticle.title}" or whatever. This is the link I got: ${selectedArticle.url}`;
  } catch (error) {
    logger.info(`Error: ${error.toString()}`);
    return "Dunno.. can't find any.";
  }
}

const getCountryCode = async country => {
  let countriesUrl = `https://restcountries.eu/rest/v2/name/${country}`
  try {
    const response = await axios.get(countriesUrl);
    if (response.status === "404" || response.data.length <= 0)
      throw "No country found.";
    var countries = response.data;
    return countries[0].alpha2Code.toLowerCase();
  } catch (error) {
    return "";
  }
}