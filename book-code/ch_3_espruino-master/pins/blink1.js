
// blink_espruino.js
var ledOn = false;
function blink() {
  ledOn = !ledOn;
  LED1.write(ledOn);
  console.log(ledOn);
}
setInterval(blink, 500);

