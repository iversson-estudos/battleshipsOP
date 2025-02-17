class Ship {
  constructor(size) {
    this.size = size;
    this.sunk = false;
    this.hits = 0;
  }

  hit() {
    if (this.hits < this.size) {
      this.hits++;
      this.checkSunk();
    }
  }
  checkSunk() {
    if (this.hits === this.size) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}

module.exports = Ship;
