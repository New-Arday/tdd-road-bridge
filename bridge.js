const DEFAULT_BRIDGE_CAPACITY = 6;
class Bridge {
  constructor() {
    this.numCars = 0;
    this.capacity = DEFAULT_BRIDGE_CAPACITY;
    this.isClosed = false;
  }
  // a: Return the number of cars currently on the bridge - DONE!
  reportCarsOnBridge() {
    return this.numCars;
  }
  // b: Record when a car moves on to the bridge -DONE! If a car tries to move on to the bridge when it is at capacity, an error should be returned -DONE!
  // c:Be able to change the *capacity* of the bridge (for example, when there is high *winds* less cars are allowed on):
  addCars() {
    if (this.isClosed === true) {
      return "Bridge is closed";
    } else {
      if (this.numCars >= this.capacity) {
        return "bridge at max capacity";
      }
      this.numCars++;
    }
  }

  removeCars() {
    if (this.numCars >= 3 || this.isClosed === true) {
      this.numCars--;
    }

    return this.numCars;
  }
  //* Close the bridge completely.Cars that are on the bridge when it is closed should be still be able to move off the bridge but no new cars should be allowed on.
  bridgeAccident() {
    this.isClosed = true;
  }
  reopenBridge() {
    this.isClosed = false;
  }
}
module.exports = Bridge;
/**
 * Record when a car moves on to the bridge. 
 - what method will implement this code? Is it a new method or an existing method?
  : a new method, addCarToBridge()
 - what do we expect this method to *do*?
  : We want it to increase the number of cars on the bridge by 1
 - What parameters does the method need?
  : None!
 - What does the the method return?
  : Nothing (At the moment)
 - What data does the method change, if any? How does it change it?
  : It will increment the numCars property of the RoadBridge class
 - Is there any other data the method needs? Where will it get it from?
  : None (later we'll also need to know the bridge capacity but we are ignoring it for now...)
 - How could I test this code? How will I know it's worked? Can we check some data that should be changed, or the method return value?
  : If I check the numCars property after I call the method it should increase by 1
 - What test cases could we have? (Test case = "when I do X, I expect Y to happen" )
  : When I call addCarToBridge() once, I expect numCars to be 1
  : When I call addCarToBridge() three times, I expect numCars to be 3
 */
/* Extension 1
  * Update your code  so that emergency vehicles can still access the bridge when it is over capacity or closed. - which methods will be affected? - -addCars(): add & give access to emergency vehicles,-bridgeAccident() :give access to emergency vehicles,
  -capacity: emergency vehicles - how? amend the default capacity setting to capacity + emergency vehicles 
  !includes.() - does this method work with numbers???
 
 Emergency vehicles should still count towards the bridge capacity, even though they are always allowed access.
  - store numCars & emergency vehicles in an array 
  - set conditional to grant access *if* emergancyVehicles.includes(),  
 */
