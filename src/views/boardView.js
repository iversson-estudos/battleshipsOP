const Ship = require("../classes/ship.js");
const Gameboard = require("../classes/gameboard.js");
const Player = require("../classes/player.js");
import { addEventsBoard } from "../events/addEventsBoard.js";

function boardView(humanPlayer, aiPlayer) {
  const aiBoard = document.getElementById("aiBoard");
  const humanBoard = document.getElementById("humanBoard");
  console.log(humanPlayer, aiPlayer);
  console.log(humanBoard, aiBoard);

  //human board
  for (let x = 0; x < humanPlayer.gameboard.log.length; x++) {
    for (let y = 0; y < humanPlayer.gameboard.log[x].length; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (humanPlayer.gameboard.log[x][y] === undefined) {
        cell.textContent = x + "|" + y;
        cell.id = x + "|" + y;
      } else {
        cell.textContent = humanPlayer.gameboard.log[x][y];
      }

      humanBoard.appendChild(cell);
    }
  }
  //ai board
  for (let x = 0; x < aiPlayer.gameboard.log.length; x++) {
    for (let y = 0; y < aiPlayer.gameboard.log[x].length; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (aiPlayer.gameboard.log[x][y] === undefined) {
        cell.textContent = x + "|" + y;
        cell.id = x + "|" + y;
      } else {
        cell.textContent = aiPlayer.gameboard.log[x][y];
      }

      aiBoard.appendChild(cell);
    }
  }
  addEventsBoard();
}

export { boardView };
