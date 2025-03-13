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
      this.changeTurn();
      this.aiGenerateCoordinates(); //this needs to change to "AI"/Player"
    }
  }
  aiAttack(x, y) {
    if (this.turn === "AI") {
      this.humanPlayer.gameboard.receiveAttack(x, y);
      this.startGame();
      this.changeTurn();
    }
  }
  aiGenerateCoordinates() {
    this.attacksLog = [];
    this.attackSucceed = 0;

    while (this.attackSucceed === 0) {
      const x = Math.floor(Math.random() * 8);
      const y = Math.floor(Math.random() * 8);

      //check colisions
      let found = 0;
      for (let f = 0; f < this.attacksLog.length; f++) {
        if (this.attacksLog[f][0] === x && this.attacksLog[f][1] === y) {
          found = 1;
        }
      }
      if (!found) {
        this.attacksLog.push([x, y]);
        this.attackSucceed = 1;
        this.aiAttack(x, y);
      }
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
