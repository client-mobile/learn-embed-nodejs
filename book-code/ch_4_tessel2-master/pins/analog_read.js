
var tessel = require('tessel');

var pin = tessel.port.B.pin[0];

// analog_read.js
pin.analogRead(function(error, value) {
  console.log(value);
});

