const Ship = require("./ship.js");

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Assuming a ship of size 3 for testing
  });

  test("should initialize with correct size, hits, and sunk status", () => {
    expect(ship.size).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(0);
  });

  test("should increment hits when hit() is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("should not be sunk if hits are less than size", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("should be sunk if hits equal size", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
    expect(ship.sunk).toBe(1);
  });

  test("should be sunk if hits exceed size", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Exceeding the size
    expect(ship.isSunk()).toBe(true); // Still sunk, but hits exceed size
    expect(ship.sunk).toBe(1);
  });

  test("hits shouldnt exceed size", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Exceeding the size
    expect(ship.hits).toBe(3); // hits dont exceed size
    expect(ship.isSunk()).toBe(true);
    expect(ship.sunk).toBe(1);
  });

  test("Ships should automatically sunk when they get hit", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
    expect(ship.sunk).toBe(1);
  });
});
