import "./styles.css";
import { mainView } from "./views/mainView.js";
const Ship = require("./classes/ship.js");
const Gameboard = require("./classes/gameboard.js");
const Player = require("./classes/player.js");

const player = new Player("Iversson");

player.gameboard.placeShip(3, 3, 4, 3);
player.gameboard.receiveAttack(3, 3);
player.gameboard.receiveAttack(3, 5);

mainView(player);
