const occurrences = (text) => {
  const mapOcurrences = new Map();
  text.toLowerCase().split(" ").forEach((element) => {
    if (mapOcurrences.get(element) === undefined) {
      mapOcurrences.set(element, 0);
    }
    mapOcurrences.set(element, mapOcurrences.get(element) + 1);
  });
  return {
    mapOcurrences,
    bar() {
      const x = (word) => {
        let result = this.mapOcurrences.get(word.toLowerCase());
        if (result === undefined) {
          result = 0;
        }
        return result;
      };
      return x;
    }
  };
};
function Counter(text) {
  const obj = occurrences(text);
  this.mapOcurrences = obj.mapOcurrences;
  this.occurrences = obj.bar();
}
module.exports = Counter;
