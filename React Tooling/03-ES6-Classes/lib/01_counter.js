class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.mapOcurrences = new Map();
    text.toLowerCase().split(" ").forEach((element) => {
      if (this.mapOcurrences.get(element) === undefined) {
        this.mapOcurrences.set(element, 0);
      }
      this.mapOcurrences.set(element, this.mapOcurrences.get(element) + 1);
    });
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    let result = this.mapOcurrences.get(word.toLowerCase());
    if (result === undefined) {
      result = 0;
    }
    return result;
  }
}
module.exports = Counter;
