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
  placeRandomShips();
}

function attack(cell) {
  const coordinates = cell.id.split("|");
  const x = coordinates[0];
  const y = coordinates[1];
  game.humanAttack(x, y);
}

function placeRandomShips(player) {
  //log of ships already placed, so we dont have colision
  let placedShips = [];
  //how many ships will be placed
  const numberOfShips = 10;

  for (let i = 0; i < numberOfShips; i++) {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);
    console.log(x, y);
    //check colisions
  }
}
export { run, attack };
