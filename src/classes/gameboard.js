const Ship = require("./ship.js");

class Gameboard {
  constructor(size = 8) {
    this.gameboard = new Array(size).fill().map(() => new Array(size).fill());
    this.gameOver = 0;
  }
  /*STARTS variable will always be the smaller ones, so we can say we scan the gameboard from left to right*/
  placeShip(startX, startY, endX, endY) {
    //calculates new ship size
    const size = (endX - startX + 1) * (endY - startY + 1);
    //creates ship to be place
    const newShip = new Ship(size);
    //place ship on coordinates == array X and Y point to this ship
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.gameboard[x][y] = newShip;
      }
    }
  }
}

module.exports = Gameboard;
