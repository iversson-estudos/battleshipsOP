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

  humanAttack(x, y) {
    if (this.turn === "Player") {
      this.aiPlayer.gameboard.receiveAttack(x, y);
      this.startGame();
      this.turn = "Ai";
    }
  }
  placeShip(x, y) {
    this.aiPlayer.gameboard.placeShip(x, y, x, y);
  }
}

export { Game };
