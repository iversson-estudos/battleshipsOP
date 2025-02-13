import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.size = 8;
    this.gameboard = new Array(this.size)
      .fill()
      .map(() => new Array(this.size).fill());
    this.gameOver = 0;
  }
  /*STARTS variable will always be the smaller ones, so we can say we scan the gameboard from left to right*/
  placeShip(startX, startY, endX, endY) {
    //DETERMINE SIZE OF SHIP
    const sizeOfShip = (endX - startX) * (endX - endY);
    //construct ship
    const newShip = new Ship(sizeOfShip);
    //place ship on coordinates == array X and Y point to this ship
    for (let x = startX; x < endX; x++) {
      for (let y = startY; y < endY; y++) {
        this.gameboard[x][y] = newShip;
      }
    }
  }
}
