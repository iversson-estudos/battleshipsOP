import { Game } from "../classes/game.js";

let game;

function run() {
  //retrieves player name
  const playerName = document.getElementById("playerName").value;
  //creates game with player name retrieved
  game = new Game(playerName);
  //place random ships

  //starts game
  game.startGame();
}

function attack(cell) {
  const coordinates = cell.id.split("|");
  const x = coordinates[0];
  const y = coordinates[1];
  game.humanAttack(x, y);
}

export { run, attack };
