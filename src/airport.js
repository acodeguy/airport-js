function Airport(capacity) {
  this.hangar = Array();
  this.hangarCapacity = capacity;
}

Airport.prototype.land = function(plane) {
  if (this.hangar.length >= this.hangarCapacity) {
    throw "airport full";
  } else {
    this.hangar.push(plane);
  }
}
Airport.prototype.takeOff = function(plane) {
  this.hangar.pop(plane);
}
Airport.prototype.hasPlane = function(plane) {
  return this.hangar.includes(plane);
}
