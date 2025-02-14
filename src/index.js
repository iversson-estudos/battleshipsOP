import "./styles.css";
const Ship = require("./classes/ship.js");
const Gameboard = require("./classes/gameboard.js");

const newGame = new Gameboard();
newGame.placeShip(2, 3, 4, 3);

console.log(newGame.gameboard);
