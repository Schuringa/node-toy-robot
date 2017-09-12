var cardinal = require("./cardinal.js");
var coordinates = require("./coordinates.js");

exports.make = function() {
  // Initializing the tabletop
  arr = [];

  // Creates all lines:
  for (var i = 0; i < 5; i++) {
    // Creates an empty line
    arr.push([]);
    // Adds cols to the empty line:
    arr[i].push(new Array(5));
    for (var j = 0; j < 5; j++) {
      // Setting all array values to zero to represent
      // that the coordinate hasnt been visited yet
      arr[i][j] = 0;
    }
  }
  // Setting array to this.tabletop
  this.tabletop = arr;
  return;
};

exports.get = function() {
  return this.tabletop;
};

exports.update = function() {
  this.tabletop[coordinates.getY()][coordinates.getX()] = cardinal.getValue();
};

exports.moveRobotX = function(value) {
  switch (value) {
    case 2:
      var x = coordinates.getX(); // Add to the x value
      x++;
      // Make sure the robot cant fall off
      if (x > 4) {
        return;
      } else {
        cardinal.setValue(0); // Setting the previous position to 0
        this.update(); // Update the tabletop
        coordinates.setX(x); // Set new x value
        cardinal.setValue(2); // Set Cardinal value
        this.update(); // Update the tabletop
        return;
      }

    case 4:
      var x = coordinates.getX(); //  from the x value
      x--;
      if (x < 0) {
        return;
      } else {
        cardinal.setValue(0); // Setting the previous position to 0
        this.update(); // Update the tabletop
        coordinates.setX(x); // Set new x value
        cardinal.setValue(4); // Set Cardinal value
        this.update(); // Update the tabletop
        return;
      }
  }
  return;
};

exports.moveRobotY = function(value) {
  switch (value) {
    case 1:
      var y = coordinates.getY();
      y--;
      if (y < 0) {
        return;
      } else {
        cardinal.setValue(0); // Setting the previous position to 0
        this.update(); // Update the tabletop
        coordinates.setY(y); // Set new y value
        cardinal.setValue(1); // Set Cardinal value
        this.update(); // Update the tabletop
        return;
      }

    case 3:
      var y = coordinates.getY(); // Subtract from the y value
      y++;
      if (y > 4) {
        return;
      } else {
        cardinal.setValue(0); // Setting the previous position to 0
        this.update(); // Update the tabletop
        coordinates.setY(y); // Set new y value
        cardinal.setValue(3); // Set Cardinal value
        this.update(); // Update the tabletop
        return;
      }
  }
  return;
};
