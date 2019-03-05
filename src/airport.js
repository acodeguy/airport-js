function Airport(capacity) {
  this.hangar = Array();
  this.hangarCapacity = capacity;
}

Airport.prototype.land = function(plane) {
  if (this.checkWeather() == "stormy") {
    throw "cannot land - stormy weather";
  } else if (this.hangar.length >= this.hangarCapacity) {
      throw "airport full";
  } else {
    this.hangar.push(plane);
  }
}


Airport.prototype.takeOff = function(plane) {
  if (this.checkWeather() == "stormy") {
    throw "cannot takeoff - stormy weather";
  } else {
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
  }

}
Airport.prototype.hasPlane = function(plane) {
  return this.hangar.includes(plane);
}

Airport.prototype.checkWeather = function() {
}
