const Gameboard = require("./gameboard.js");
const Ship = require("./ship.js");

describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.placeShip(2, 3, 4, 3);
  });

  test("should initialize gameboard", () => {
    expect(gameboard.gameOver).toBe(0);
    expect(gameboard).toBeInstanceOf(Gameboard);
  });
  test("navio deve ser inserido", () => {
    expect(gameboard.gameboard[2][3]).toBeInstanceOf(Ship);
  });
});
