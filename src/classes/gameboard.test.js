const Gameboard = require("./gameboard.js");
const Ship = require("./ship.js");

describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should initialize gameboard", () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
  });
  test("Ships should initialize on their respective position", () => {
    gameboard.placeShip(2, 3, 4, 3);
    expect(gameboard.gameboard[2][3]).toBeInstanceOf(Ship);
    expect(gameboard.gameboard[3][3]).toBeInstanceOf(Ship);
    expect(gameboard.gameboard[4][3]).toBeInstanceOf(Ship);
  });
  test("Ships should have their size correctly calculated", () => {
    gameboard.placeShip(5, 3, 5, 3);
    gameboard.placeShip(1, 6, 2, 6);
    gameboard.placeShip(2, 3, 4, 3);
    gameboard.placeShip(3, 6, 7, 6);
    expect(gameboard.gameboard[5][3].size).toBe(1);
    expect(gameboard.gameboard[2][6].size).toBe(2);
    expect(gameboard.gameboard[2][3].size).toBe(3);
    expect(gameboard.gameboard[3][6].size).toBe(5);
  });
});
