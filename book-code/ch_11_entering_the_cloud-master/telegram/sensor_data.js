// credits to https://github.com/rssilva/johnny-telegram
//
//
var johnnyTelegram = require('johnny-telegram');

var five = require('johnny-five');
var TelegramBot = require('node-telegram-bot-api');

var board = new five.Board();

var token = '.... insert key ....';

var bot = new TelegramBot(token, {polling: true});

johnnyTelegram.init(bot);

board.on('ready', function () {
  // Instantiate a proximity sensor
  var proximity = new five.Sensor({
    pin: 'A5'
  });

  // Adds a sensor named 'prox'
  johnnyTelegram.add('prox', proximity);

  // Everytime that this sensor have data, we call the Johnny-Telegram 'setValue' method
  //  setting the 'prox' sensor stored value
  proximity.on('data', function() {
    console.log(this.value);
    johnnyTelegram.setValue('prox', this.value);
  });

  johnnyTelegram.bindEvents();
});
