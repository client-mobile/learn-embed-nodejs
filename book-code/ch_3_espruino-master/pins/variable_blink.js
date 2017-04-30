
// variable_blink.js
setInterval(function() {
  var delay = 400 + 600 * analogRead(A0);
  digitalWrite(LED1,1);
  setTimeout(function() { 
    digitalWrite(LED1,0); },
  delay);
}, 1000);


