var five = require("johnny-five");
var util = require('util');

var board = new five.Board({
});

// Create a new arm class
var Arm = function() { 

  five.Servo.apply(this, arguments);

  this.up = function() {
    this.max();
  }

  this.moveTo = function(pos) {
    this.to(pos);
  }

  this.down = function() {
    this.min();
  }

};
util.inherits(Arm, five.Servo);

// Create a new hand class
var Hand = function() { 

  five.Servo.apply(this, arguments);

  this.open = function() {
    this.min();
  }

  this.moveTo = function(pos) {
    this.to(pos);
  }

  this.close = function() {
    this.max();
  }

};
util.inherits(Hand, five.Servo);

var Goal = function(arm, hand) {

  this.arm = arm;
  this.hand = hand;

  this.prepare = function() {
    this.arm.down();
    this.hand.open();
    console.log('prepared');
  }

  this.grabObject = function() {
    console.log('hand will close');
    this.hand.close();
  }

  this.moveObject = function() {
    this.arm.up();
  }

  this.releaseObject = function() {
    this.hand.open();
  }

}


board.on("ready", function() {

  // arm servo on pin 9 
  var arm = new Arm(9);
 
  // hand servo on pin 10 
  var hand = new Hand(10);

  // add goal
  var goal = new Goal(arm, hand);

  this.repl.inject({
    hand: hand,
    arm: arm,
    goal: goal
  });

});

