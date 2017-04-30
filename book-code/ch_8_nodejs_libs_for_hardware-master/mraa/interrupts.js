var mraa = require('mraa');
function handler() {
  console.log('button press');
}

var pin = new mraa.Gpio(4);
pin.isr(mraa.EDGE_FALLING, handler);

setInterval(function() {
  console.log("nothing happened");
}, 400);
