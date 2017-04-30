var mqtt=require('mqtt');

var client  = mqtt.connect('mqtt://test.mosca.io');

client.on('connect', function () {
  client.subscribe('/welcome/hello');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});
