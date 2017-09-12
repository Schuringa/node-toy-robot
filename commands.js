// Import cardinal, coordinates and tabletop functions
var cardinal = require("./cardinal.js");
var coordinates = require("./coordinates.js");
var tabletop = require("./tabletop.js");

exports.place = function(value) {
  // Make the tabletop
  tabletop.make();

  // Regex for getting x,y,Direction
  var valueRegex = /([0-4])[,]([0-4])[,](NORTH|SOUTH|EAST|WEST)/;
  // Splitting string into array
  var coord = value.match(valueRegex)[0].split(",");

  // Setting coordinates
  coordinates.setX(coord[0]);
  coordinates.setY(4 - coord[1]);

  // Setting int value for each cardinal direction
  // eg. NORTH = 1, SOUTH = 3
  switch (coord[2]) {
    case "NORTH":
      cardinal.setValue(1); // Setting cardinal value
      break;
    case "EAST":
      cardinal.setValue(2);
      break;
    case "SOUTH":
      cardinal.setValue(3);
      break;
    case "WEST":
      cardinal.setValue(4);
      break;
  }
  // Placing the robot
  tabletop.update();
  console.log(tabletop.get());
  return;
};

exports.left = function() {
  switch (cardinal.getValue()) {
    case 1: // NORTH
      cardinal.setValue(4); // Updating cardinal value
      tabletop.update(); // Updating tabletop
      console.log(tabletop.get());
      return;
    case 2: // EAST
      cardinal.setValue(1);
      tabletop.update();
      console.log(tabletop.get());
      return;
    case 3: // SOUTH
      cardinal.setValue(2);
      tabletop.update();
      console.log(tabletop.get());
      return;
    case 4: // WEST
      cardinal.setValue(3);
      tabletop.update();
      console.log(tabletop.get());
      return;
  }
  return;
};

exports.right = function() {
  switch (cardinal.getValue()) {
    case 1: // NORTH
      cardinal.setValue(2); // Updating cardinal value
      tabletop.update(); // Updating tabletop
      console.log(tabletop.get());
      return;
    case 2: // EAST
      cardinal.setValue(3);
      tabletop.update();
      console.log(tabletop.get());
      return;
    case 3: // SOUTH
      cardinal.setValue(4);
      tabletop.update();
      console.log(tabletop.get());
      return;
    case 4: // WEST
      cardinal.setValue(1);
      tabletop.update();
      console.log(tabletop.get());
      return;
  }
  return;
};

exports.move = function() {
  switch (cardinal.getValue()) {
    case 1: // NORTH
      tabletop.moveRobotY(1);
      console.log(tabletop.get());
      return;
    case 2: // EAST
      tabletop.moveRobotX(2);
      console.log(tabletop.get());
      return;
    case 3: // SOUTH
      tabletop.moveRobotY(3);
      console.log(tabletop.get());
      return;
    case 4: // WEST
      tabletop.moveRobotX(4);
      console.log(tabletop.get());
      return;
  }
  return;
};

exports.report = function() {
  var x = coordinates.getX();
  var y = 4 - coordinates.getY();
  cardinalString = cardinal.getString();
  report = x + "," + y + "," + cardinalString;
  console.log(report);
  return;
};
