var mraa=require('mraa');
var led = new mraa.Gpio(8);
led.dir(mraa.DIR_OUT);

var blink = 0;
setInterval(function() {
 blink = !blink;
 blink ? led.write(1) : led.write(0);
}, 2000);

