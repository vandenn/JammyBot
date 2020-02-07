const axios = require('axios');
const logger = require('../../logger.js');
const preprocessor = require('../preprocessor.js');

exports.getJokeMessage = async text => {
  text = preprocessor.removeNonAlphanumeric(text);
  if (!text.match(/(give|say|tell) [A-z ]*joke/i))
    return "";

  let url = `https://icanhazdadjoke.com/`;
  let config = {
    headers: {
      Accept: 'text/plain'
    }
  };

  try {
    const response = await axios.get(url, config);
    const joke = response.data;
    possibleResponses = [
      `What the frick? Uhh.. how about this: "${joke}"`,
      `I saw this one online before or something. It's like.. "${joke}"`,
      `Besides your face, there's this funny one I saw before: "${joke}"`
    ];
    return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
  } catch (error) {
    logger.info(`Error: ${error.toString()}`);
    return "Ugh.. too tired to think of any.";
  }
}