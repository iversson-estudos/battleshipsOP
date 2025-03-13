import { Game } from "../classes/game.js";
import Ship from "../classes/ship.js";

let game;

function run(playerName) {
  //retrieves player name
  //const playerName = document.getElementById("playerName").value;
  //creates game with player name retrieved
  game = new Game(playerName);
  //place random ships
  placeRandomShips();
  //starts game
  game.startGame();
}

function sendAttack(cell) {
  const coordinates = cell.id.split("|");
  const x = coordinates[0];
  const y = coordinates[1];
  game.attack(x, y);
}

function placeRandomShips() {
  //log of ships already placed, so we dont have colision
  let placedShips = [];
  //how many ships will be placed
  const numberOfShips = 10;

  for (let i = 0; i < numberOfShips; i++) {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);

    console.log(x, y);
    //check colisions
    let found = 0;
    for (let f = 0; f < placedShips.length; f++) {
      if (placedShips[f][0] === x && placedShips[f][1] === y) {
        found = 1;
      }
    }
    if (found) {
      i--;
    } else {
      game.placeShip(x, y);
      placedShips.push([x, y]);
    }
  }

  console.log(placedShips);
}

export { run, sendAttack };
