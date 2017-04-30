// mqtt_sub_10s.js
//
var mqtt = require('mqtt');

// Create an MQTT client
client = mqtt.connect('mqtt://test.mosca.io', 1883);

// Indicate what topics we care about
client.subscribe('arduino/#');

// Respond to message on subscribed topic(s)
client.on('message', function (topic, message) {
  console.log(topic,": ", message.toString());
});

// Exit after 10s whether or not we get a message
setTimeout(function() {
  client.end();
}, 10000);

