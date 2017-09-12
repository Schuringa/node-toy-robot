var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var inquirer = require("inquirer");
var _ = require("lodash");
var fs = require("fs");
// Require functions
var commands = require("./commands.js");
var tabletop = require("./tabletop.js");
var ui = new inquirer.ui.BottomBar();

// Clearing anything in the temrinal
clear();

// Displaying a title
console.log(
  chalk.green(
    figlet.textSync("Toy Robot", {
      font: "Big",
      horizontalLayout: "full"
    })
  )
);
console.log("");
console.log("");

// Displaying a title
console.log(chalk.green("  Author: Jordan Schuringa"));
console.log("");
console.log(chalk.yellow("  Commands: PLACE x,y,z"));
console.log(chalk.yellow("            MOVE"));
console.log(chalk.yellow("            LEFT"));
console.log(chalk.yellow("            RIGHT"));
console.log(chalk.yellow("            REPORT"));
console.log("");
console.log("");

function initialize(callback) {
  var inputs = [
    {
      name: "command",
      type: "input",
      message: "Please enter a command:",
      validate: function(value) {
        // Regex for getting the PLACE command from console input
        placeRegex = /^PLACE\s([0-4])[,]([0-4])[,](NORTH|SOUTH|EAST|WEST)$/;

        // Regex for getting the MOVE command from console input
        moveRegex = /^MOVE$/;

        // Regex for getting the LEFT command from console input
        leftRegex = /^LEFT$/;

        // Regex for getting the RIGHT command from console input
        rightRegex = /^RIGHT$/;

        // Regex for getting the REPORT command from console input
        reportRegex = /^REPORT$/;

        if (value.match(placeRegex)) {
          // If PLACE regex matches
          commands.place(value);
        } else if (value.match(moveRegex) && tabletop.get() != null) {
          // If MOVE regex matches
          commands.move();
        } else if (value.match(leftRegex) && tabletop.get() != null) {
          // If LEFT regex matches
          commands.left();
        } else if (value.match(rightRegex) && tabletop.get() != null) {
          // If RIGHT regex matches
          commands.right();
        } else if (value.match(reportRegex) && tabletop.get() != null) {
          // If REPORT regex matches
          commands.report();
        } else {
          return "Please enter a valid command";
        }
      }
    }
  ];
  inquirer.prompt(inputs).then(callback);
}

initialize(function() {});
