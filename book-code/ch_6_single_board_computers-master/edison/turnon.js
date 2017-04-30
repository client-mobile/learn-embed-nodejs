var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var myLed = new m.Gpio(13);
myLed.dir(m.DIR_OUT);

myLed.write(1);
