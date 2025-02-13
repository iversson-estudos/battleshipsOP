class Ship {
  constructor(size) {
    this.size = size;
    this.sunk = 0;
    this.hits = 0;
  }

  hit() {
    if (this.hits < this.size) {
      this.hits++;
      this.isSunk();
    }
  }
  isSunk() {
    if (this.hits === this.size) {
      this.sunk = 1;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Ship;
