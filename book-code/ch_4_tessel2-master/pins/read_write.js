
// read_write.js
var tessel = require('tessel');

var pin0 = tessel.port.B.pin[0];
var pin1 = tessel.port.B.pin[1];

// pin0 acts as output when you write data to it
pin0.output(1);

// pin1 acts as input when you read data from it
setInterval(function () {
  pin1.read(function(err, val) {
      console.log(val);
  });
}, 600);


