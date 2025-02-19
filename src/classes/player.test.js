const Player = require("./player.js");
const Gameboard = require("./gameboard.js");

describe("Player", () => {
  let player;
  beforeEach(() => {
    player = new Player("Iversson");
  });

  test("should initialize player and his gameboard", () => {
    expect(player).toBeInstanceOf(Player);
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });
});
