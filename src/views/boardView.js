const Ship = require("../classes/ship.js");
const Gameboard = require("../classes/gameboard.js");
const Player = require("../classes/player.js");

function boardView(player) {
  const mainContainer = document.getElementById("main");
  const board = mainContainer.querySelector(".board");
  console.log(player);

  for (let x = 0; x < player.gameboard.log.length; x++) {
    for (let y = 0; y < player.gameboard.log[x].length; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerHTML = player.gameboard.log[x][y];
      board.appendChild(cell);
    }
  }
}

export { boardView };
