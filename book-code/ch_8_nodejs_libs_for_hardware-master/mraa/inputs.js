

var mraa = require('mraa');

var button = new mraa.Gpio(4);
button.dir(mraa.DIR_IN);

var analogPin0 = new mraa.Aio(0);

setInterval(function() {
  var sample = analogPin0.read();
  var sampleFloat = analogPin0.readFloat();
  console.log(sample);
  console.log(sampleFloat);
}, 300);
