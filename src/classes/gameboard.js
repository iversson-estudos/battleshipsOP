const Ship = require("./ship.js");

class Gameboard {
  constructor(size = 8) {
    this.gameboard = new Array(size).fill().map(() => new Array(size).fill());
    this.log = new Array(size).fill().map(() => new Array(size).fill());
    this.gameOver = false;
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
  receiveAttack(x, y) {
    //checks if game ended
    if (this.gameOver === true) {
      throw new Error("Game ended, no more attacks allowed");
    }
    //checks if hit is out of bounds
    if (x >= 8 || y >= 8) {
      throw new Error("Out of bounds");
    }
    //checks if coordinates already hit
    if (this.log[x][y]) {
      throw new Error("Already hit");
    }

    if (this.gameboard[x][y] instanceof Ship) {
      this.gameboard[x][y].hit();
      this.log[x][y] = "hit";
      this.checkGameOver();
      return true;
    } else {
      this.log[x][y] = "miss";
      return false;
    }
  }

  checkGameOver() {
    let shipsNotSunk = 0;
    for (let x = 0; x < this.gameboard.length; x++) {
      for (let y = 0; y < this.gameboard[x].length; y++) {
        if (this.gameboard[x][y] instanceof Ship) {
          if (this.gameboard[x][y].isSunk() === false) {
            shipsNotSunk += 1;
          }
        }
      }
    }
    if (shipsNotSunk === 0) {
      this.gameOver = true;
    }
  }
}

module.exports = Gameboard;
