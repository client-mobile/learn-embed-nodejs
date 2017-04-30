var mraa=require('mraa');
var mqtt=require('mqtt');

var pin = new mraa.Pwm(0);
pin.period(200);
pin.enable(true);

var client  = mqtt.connect('mqtt://test.mosca.io');

client.on('connect', function () {
  client.subscribe('/welcome/hello');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(parseFloat(message.toString()));
  pin.write(parseFloat(message.toString()));
});
