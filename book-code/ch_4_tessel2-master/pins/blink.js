
// blink.js
// Import the interface to Tessel hardware 
var tessel = require('tessel');

// Blink!
setInterval(function () {
  tessel.led[2].toggle();
}, 100);

