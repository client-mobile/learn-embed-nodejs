var mqtt=require('mqtt');

var client  = mqtt.connect('mqtt://test.mosca.io');

client.on('connect', function () {
  client.subscribe('/pmtest12345/temp');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});
