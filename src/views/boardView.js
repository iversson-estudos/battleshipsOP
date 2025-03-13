const Ship = require("../classes/ship.js");
const Gameboard = require("../classes/gameboard.js");
const Player = require("../classes/player.js");
import { addEventsBoard } from "../events/addEventsBoard.js";

function boardView(humanPlayer, aiPlayer) {
  const aiBoard = document.getElementById("aiBoard");
  const humanBoard = document.getElementById("humanBoard");

  //human board
  for (let x = 0; x < humanPlayer.gameboard.log.length; x++) {
    for (let y = 0; y < humanPlayer.gameboard.log[x].length; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = x + "|" + y;
      if (humanPlayer.gameboard.gameboard[x][y] instanceof Ship) {
        cell.innerHTML = `<span class="material-symbols-outlined">
        sailing
        </span>`;
      } else if (
        humanPlayer.gameboard.gameboard[x][y] === "" &&
        humanPlayer.gameboard.log[x][y] === ""
      ) {
        cell.innerHTML = `<span class="material-symbols-outlined">
        waves
        </span>`;
      } else if (
        humanPlayer.gameboard.gameboard[x][y] === "" &&
        humanPlayer.gameboard.log[x][y] === "miss"
      ) {
        cell.innerHTML = `<span class="material-symbols-outlined">
        close
        </span>`;
      } else if (
        humanPlayer.gameboard.gameboard[x][y] === "" &&
        humanPlayer.gameboard.log[x][y] === "hit"
      ) {
        cell.innerHTML = `<span class="material-symbols-outlined">
        check
            </span>`;
      }

      humanBoard.appendChild(cell);
    }
  }
  //ai board
  for (let x = 0; x < aiPlayer.gameboard.log.length; x++) {
    for (let y = 0; y < aiPlayer.gameboard.log[x].length; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = x + "|" + y;
      switch (aiPlayer.gameboard.log[x][y]) {
        case "":
          cell.innerHTML = `<span class="material-symbols-outlined">
          question_mark
        </span>`;
          break;
        case "miss":
          cell.innerHTML = `<span class="material-symbols-outlined">
          close
          </span>`;
          break;
        case "hit":
          cell.innerHTML = `<span class="material-symbols-outlined">
          check
              </span>`;
          break;
      }

      aiBoard.appendChild(cell);
    }
  }
  addEventsBoard();
}

export { boardView };
