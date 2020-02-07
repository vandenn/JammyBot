const axios = require('axios');
const logger = require('../../logger.js');
const preprocessor = require('../preprocessor.js');

exports.getAdviceMessage = async text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.match(/give [A-z ]*advice/i))
    return "";

  let url = `https://api.adviceslip.com/advice`;

  try {
    const response = await axios.get(url);
    let advice = response.data.slip.advice;
    advice = advice.charAt(0).toLowerCase() + advice.slice(1);
    return `Like.. ${advice}. or whatever.`;
  } catch (error) {
    logger.info(`Error: ${error.toString()}`);
    return "I dunno.. figure your life out or something.";
  }
}