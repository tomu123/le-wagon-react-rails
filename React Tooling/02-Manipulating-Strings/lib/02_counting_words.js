function occurrences(text, word) {
  const arrayText = text.toLowerCase().split(" ");
  const wordI = word.toLowerCase();
  let count = 0;
  arrayText.forEach((element) => {
    if (element === wordI) {
      count += 1;
    }
  });
  return count;
}

module.exports = occurrences;
