var mraa=require('mraa');

var pin = new mraa.Pwm(3);
pin.period(200);
pin.enable(true);

var level = 0;

setInterval(function() {
  pin.write(level);
  level+=0.01;
  if (level >= 1) {
    level = 0;
  }
}, 50);
