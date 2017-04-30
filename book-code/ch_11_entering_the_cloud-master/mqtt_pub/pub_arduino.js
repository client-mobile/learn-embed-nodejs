// connection
// pub_arduino.js
//
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosca.io', 1883);
var five = require('johnny-five');

// add board
var board = new five.Board({
  repl: false
});

board.on('ready', function() {
   client.publish('arduino', 'connected');

   var sensor = five.Sensor({
     pin: 'A5'
   });

   // Publish a message
   sensor.on('data', function() {
     var message = 'value: ' + this.value;
     client.publish('arduino/slider', message);
   });
});
