const Bridge = require("../../bridge");
describe("Bridge", () => {
  let bridge;
  beforeEach(() => {
    bridge = new Bridge();
  });

  it("return the number of cars currently on the bridge", () => {
    // set up
    const expected = 0;

    // execute

    const result = bridge.reportCarsOnBridge();
    // verify
    expect(result).toEqual(expected);
  });
  it("return the number of cars currently on the bridge", () => {
    // set up
    const expected = 4;

    // execute
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();

    const result = bridge.reportCarsOnBridge();
    // verify
    expect(result).toEqual(expected);
  });
  it("set bridge at capacity of 6", () => {
    // set up
    const expected = "bridge at max capacity";

    // execute
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();

    const result = bridge.addCars();
    // verify
    // console.log(result);
    expect(result).toEqual(expected);
  });
  it("record when a car moves off the bridge.", () => {
    // set up
    // bridge.capacity = 3; // hmm...
    const expected = 3;
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    // bridge.addCars();
    // bridge.addCars();
    // bridge.addCars();
    // bridge.removeCars();
    // bridge.removeCars();
    // bridge.removeCars();
    // bridge.removeCars();
    // bridge.removeCars();
    // execute

    const result = bridge.removeCars();
    // verify
    // console.log(result);
    // expect(bridge.numCars).toEqual(3);
    expect(result).toEqual(expected);
  });

  it("set capacity of the number of cars currently on the bridge to 10 ", () => {
    // set up
    const expected = "bridge at max capacity";

    // execute
    bridge.capacity = 10;
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();
    bridge.addCars();

    const result = bridge.addCars();
    // const numCars = bridge.numCars; //// why? & how?
    // verify
    // expect(bridge.numCars).toEqual(10); // prevents access to the bridge
    console.log(result);
    expect(result).toEqual(expected);
  });
  it("Bridge is closed, due to an accident", () => {
    // set up
    const expected = "Bridge is closed";
    bridge.addCars();
    bridge.bridgeAccident();
    bridge.removeCars();
    bridge.addCars();
    const result = bridge.addCars();

    // const numCars = bridge.numCars; //// why? & how?
    // verify
    expect(bridge.numCars).toEqual(0); // prevents access to the bridge
    expect(result).toEqual(expected);
  });
  it("Bridge is now open", () => {
    // set up
    bridge.addCars();
    bridge.bridgeAccident();
    bridge.removeCars();
    bridge.addCars();
    bridge.reopenBridge();
    bridge.addCars();

    // verify
    expect(bridge.numCars).toEqual(1); // prevents access to the bridge
  });
});
