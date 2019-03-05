function Airport(capacity) {
  this.hangar = Array(capacity);
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
}
