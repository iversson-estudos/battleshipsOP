const Player = require("../classes/player.js");
import { mainView } from "../views/mainView.js";

function startGame(playerName) {
  const humanPlayer = new Player(playerName);
  const aiPlayer = new Player();
  humanPlayer.gameboard.placeShip(3, 3, 4, 3);
  humanPlayer.gameboard.receiveAttack(3, 3);

  mainView(humanPlayer);
}

export { startGame };
