exports.getMathMessage = text => {
  var mathRegex = /(\d+[+\-*\/^%])*(\d+)/g;
  var matches = text.match(mathRegex);
  if (!matches) return '';

  var result = Math.floor(Math.random() * 1000);
  if (Math.random() >= 0.1) {
    result = eval(matches[0]);
  }
  result = Math.round(result * 100) / 100;

  possibleResponses = [
    `Ugh.. math.. is it like ${result} or whatever?`,
    `I dunno? ${result}?`,
    `I'm too lazy to think.. ${result}?`,
    `Why are you asking me? I dunno, ${result}?`
  ];
  return possibleResponses[
    Math.floor(Math.random() * possibleResponses.length)
  ];
};
