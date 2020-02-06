exports.initialPreprocess = (text) => {
  return text.toLowerCase();
}

exports.removeNonAlphanumeric = (text) => {
  return text.toLowerCase().replace(/[^A-z1-9 ]/g, '');
}