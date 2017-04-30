var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var myLed = new m.Gpio(13);
myLed.dir(m.DIR_OUT);

myLed.write(1);
root@edison:~/projects/led13# cat turnoff.js

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var myLed = new m.Gpio(11);
myLed.dir(m.DIR_OUT);

myLed.write(0);
