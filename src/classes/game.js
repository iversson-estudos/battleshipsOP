const Player = require("./player.js");
import { mainView } from "../views/mainView.js";
import { startView } from "../views/startView.js";

class Game {
  constructor(playerName) {
    this.humanPlayer = new Player(playerName);
    this.aiPlayer = new Player();
    this.turn = "Player";
  }

  startGame() {
    mainView(this.humanPlayer, this.aiPlayer);
  }

  attack(x, y) {
    if (this.turn === "Player") {
      this.aiPlayer.gameboard.receiveAttack(x, y);
      this.startGame();
      this.changeTurn(); //this needs to change to "AI"/Player"
    }
  }
  aiAttack() {
    if (this.turn === "AI") {
      this.humanPlayer.gameboard.receiveAttack(x, y);
    }
  }
  changeTurn() {
    if (this.turn === "Player") {
      this.turn = "AI";
    } else {
      this.turn = "Player";
    }
  }
  placeShip(x, y) {
    this.aiPlayer.gameboard.placeShip(x, y, x, y);
    this.humanPlayer.gameboard.placeShip(x, y, x, y);
  }
}

export { Game };
