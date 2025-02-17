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
  /*HITS */
  test("Gameboard takes a pair of coordinates x/y, and determines wheter it hits or not a ship and sends the hit function to the correct ship or records the coordinates of the missed shot", () => {
    gameboard.placeShip(1, 6, 2, 6);
    expect(gameboard.receiveAttack(1, 6)).toBe(true);
    expect(gameboard.receiveAttack(3, 6)).toBe(false);
  });
  test("Gameboard registers missed shots", () => {
    gameboard.placeShip(1, 5, 2, 5);
    gameboard.receiveAttack(1, 4);
    expect(gameboard.log[1][4]).toBe("miss");
  });
  test("Gameboard throws error if it receives an out of bounds attack", () => {
    expect(() => {
      gameboard.receiveAttack(8, 8);
    }).toThrow(Error);
  });
  test("Ships get hits recorded correctly", () => {
    gameboard.placeShip(1, 6, 2, 6);
    gameboard.receiveAttack(1, 6);
    expect(gameboard.gameboard[2][6].hits).toBe(1);
  });
  test("Gameboard doesnt allow the hits on already hit coordinates", () => {
    gameboard.placeShip(1, 6, 2, 6);
    gameboard.receiveAttack(1, 6);
    expect(() => {
      gameboard.receiveAttack(1, 6);
    }).toThrow(Error);
  });
  test("Ships dont sink if all their body isnt hit", () => {
    gameboard.placeShip(1, 6, 2, 6);
    gameboard.receiveAttack(1, 6);
    expect(gameboard.gameboard[2][6].isSunk()).toBe(false);
  });
  test("Ships only sink if all their body is hit", () => {
    gameboard.placeShip(1, 6, 2, 6);
    gameboard.receiveAttack(1, 6);
    gameboard.receiveAttack(2, 6);
    expect(gameboard.gameboard[2][6].isSunk()).toBe(true);
  });
});
