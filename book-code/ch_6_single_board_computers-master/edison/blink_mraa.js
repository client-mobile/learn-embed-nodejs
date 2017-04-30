
var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var myLed = new m.Gpio(13);
myLed.dir(m.DIR_OUT);
var ledState = true;
var delay = 800;

periodicActivity();


function periodicActivity()
{
  myLed.write(ledState?1:0);
  ledState = !ledState; //invert the ledState

  if (ledState == 1) {
    delay = 300;
  } else {
    delay = 600;
  }
  setTimeout(periodicActivity, delay);
}
