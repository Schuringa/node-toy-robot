exports.setValue = function(value) {
  this.cardinal = value;
};

exports.getValue = function() {
  return this.cardinal;
};

// Return the cardinal string accosiated with the value
exports.getString = function() {
  switch (this.cardinal) {
    case 1:
      return "NORTH";
    case 2:
      return "EAST";
    case 3:
      return "SOUTH";
    case 4:
      return "WEST";
  }
};
