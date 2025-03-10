const Player = require("./player.js");
import { mainView } from "../views/mainView.js";

class Game {
  constructor(playerName) {
    this.humanPlayer = new Player(playerName);
    this.aiPlayer = new Player();
    this.turn = "Player";
  }

  startGame() {
    mainView(humanPlayer, aiPlayer);
  }
}

export { Game };
