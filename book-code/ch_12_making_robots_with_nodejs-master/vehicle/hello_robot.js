var five = require("johnny-five"),
  board, motor, led;

var Robot = function(pin_motor1_pos, pin_motor2_pos, pin_motor1_neg, pin_motor2_neg) {

  var motor1_pos = five.Pin.apply(this, [{pin: pin_motor1_pos}]);
  var motor2_pos = five.Pin.apply(this, [{pin: pin_motor2_pos}]);

  var motor1_neg = five.Pin.apply(this,  [{pin: pin_motor1_neg}]);
  var motor2_neg = five.Pin.apply(this, [{pin: pin_motor2_neg}]);

  this.forward = function() {
    motor1_pos.high();
    motor1_neg.low();

    motor2_pos.high();
    motor2_neg.low();
  }

  this.backward = function() {
    motor1_pos.low();
    motor1_neg.high();

    motor2_pos.low();
    motor2_neg.high();
  }

  this.stop = function() {
    motor1_pos.low();
    motor1_neg.low();

    motor2_pos.low();
    motor2_neg.low();
  }

}


board = new five.Board({
});

board.on("ready", function() {

  var robot = new Robot(10,6,9,3);
  
  board.repl.inject({
    robot: robot
  });

});
