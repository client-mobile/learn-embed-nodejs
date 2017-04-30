var BeagleBone = require('beaglebone-io');
var board = new BeagleBone();

board.on('ready', function () {
  this.digitalWrite(13, this.HIGH);
  this.analogRead('A0', function (value) {
    console.log(value);
  });
});
