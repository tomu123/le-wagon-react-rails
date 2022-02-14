function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const regex = /([bcdfghjklmnpqrstvwxys])([bcdfghjklmnpqrstvwxys])/gi;
  return word.replace(regex, "$1-$2");
}

module.exports = insertDash;
