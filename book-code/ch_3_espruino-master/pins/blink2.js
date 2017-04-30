
// blink_timeout.js 
var ledOn = false;
var delay = 500;
function blink() {
  digitalWrite(LED, ledOn);
  ledOn = !ledOn;
  setTimeout(blink, delay);
} 
blink();

