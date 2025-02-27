const Gameboard = require("./gameboard");

class Player {
  constructor(name = "Computer") {
    this.name = name;
    this.gameboard = new Gameboard();
    this.playerType = this.name === "Computer" ? "AI" : "Human";
  }
}

module.exports = Player;
