const axios = require('axios');
const logger = require('../../../../logger.js');
const globalConstants = require('../../../../constants/main.js');

exports.getGamesRecommendationMessage = async (type, object, action, details) => {
  if (type.match(/what/i)) {
    if (action.match(/play/i)) {
      return await getWhatRecommendationMessage();
    }
  }
  return "";
}

const getWhatRecommendationMessage = async () => {
  let randomQueryLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  let url = 'https://api-v3.igdb.com/games/'
  let data = `search "${randomQueryLetter}"; fields name; limit 100; where rating > 70;`;
  let config = {
    headers: {
      'user-key': process.env.IGDB_KEY
    }
  };
  try {
    const response = await axios.post(url, data, config);
    const games = response.data;
    logger.info(`Retrieved: ${JSON.stringify(games)}`);
    if (games.length <= 0)
      throw "No games found.";
    const game = games[Math.floor(Math.random() * games.length)];
    return `Uhh.. hmm.. lemme see.. maybe ${game.name}?`;
  } catch (error) {
    logger.info(`Error: ${error.toString()}`);
    return "Ugh.. too tired to think of any.";
  }
}