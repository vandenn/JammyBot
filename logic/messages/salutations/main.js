const goodbye = require('./goodbye.js');
const thanks = require('./thanks.js');
const howAreYou = require('./howAreYou.js');

exports.getMessage = text => {
  var message = "";
  if (message = goodbye.getGoodbyeMessage(text))
    return message;
  else if (message = howAreYou.getHowAreYouMessage(text))
    return message;
  else if (message = thanks.getThanksMessage(text))
    return message;
  else
    return "";
}