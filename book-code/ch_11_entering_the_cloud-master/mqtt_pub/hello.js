var mqtt    = require('mqtt');

// mosquitto
// var client  = mqtt.connect('mqtt://test.mosquitto.org');

// mosca
var client  = mqtt.connect('mqtt://test.mosca.io');

client.on('connect', function () {
  client.subscribe('/welcome/hello');
  client.publish('/welcome/hello', 'Hello from device1');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  // client.end();
});
