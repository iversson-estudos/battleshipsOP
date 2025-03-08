import "./styles.css";
import { mainView } from "./views/mainView.js";
import { startView } from "./views/startView.js";
const Ship = require("./classes/ship.js");
const Gameboard = require("./classes/gameboard.js");
const Player = require("./classes/player.js");

const humanPlayer = new Player("iversson");
const aiPlayer = new Player();
humanPlayer.gameboard.placeShip(5, 1, 5, 3);
humanPlayer.gameboard.placeShip(3, 3, 4, 3);
humanPlayer.gameboard.placeShip(7, 1, 7, 5);
humanPlayer.gameboard.placeShip(1, 3, 2, 3);
humanPlayer.gameboard.placeShip(4, 6, 4, 7);

mainView(humanPlayer, aiPlayer);
