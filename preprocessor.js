exports.preprocess = (text) => {
  return word.toLowerCase().replace(/\W/g, '');
}