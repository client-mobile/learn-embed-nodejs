var five = require("johnny-five");

var board = new five.Board({
});

board.on("ready", function() {

  // arm servo on pin 9 
  var arm = new five.Servo(9);
 
  // hand servo on pin 10 
  var hand = new five.Servo(10);

  this.repl.inject({
    hand: hand,
    arm: arm
  });

});

