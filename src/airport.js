function Airport(capacity) {
  this.hangar = Array(capacity);
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
}
Airport.prototype.takeOff = function(plane) {
  this.hangar.pop(plane);
}
Airport.prototype.hasPlane = function(plane) {
  return this.hangar.includes(plane);
}
