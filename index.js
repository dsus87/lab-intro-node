class SortedList {
  constructor() {
    this.items =[];
    this.length = 0;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // sort in ascending order
    this.length = this.items.length; // update length property
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}



module.exports = SortedList;

