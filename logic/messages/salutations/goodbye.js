exports.getGoodbyeMessage = text => {
  if (!text.includes("bye"))
    return "";
  return "Fine. Whatever! Just go!";
}