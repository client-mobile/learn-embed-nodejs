// credits to https://github.com/rssilva/johnny-telegram
//
//
var johnnyTelegram = require('johnny-telegram');
var five = require('johnny-five');

var TelegramBot = require('node-telegram-bot-api');

var board = new five.Board();

var token = '... insert key ...';

var bot = new TelegramBot(token, {polling: true});

// Instantiate the module and passes the telegram bot as parameter
johnnyTelegram.init(bot);

// Waits to the Johnny Five board to be ready. To create sensors before it
//  probably will cause execution errors
board.on('ready', function () {
  // Instantiate a new led on pin 13
  var led = new five.Led(3);

  // We are adding a led to Johnny-Telegram called 'led' so we have a reference name
  //  to call on Telegram
  johnnyTelegram.add('led', led);

  // This method adds a listener to the telegram events
  johnnyTelegram.bindEvents();
});
