const Gameboard = require("./gameboard.js");

describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should initialize gameboard", () => {
    expect(gameboard.gameOver).toBe(0);
    expect(gameboard).toBeInstanceOf(Gameboard);
  });
});
