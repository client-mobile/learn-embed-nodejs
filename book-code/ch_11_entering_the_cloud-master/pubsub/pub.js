// simple pub-sub example inspired by 
//   http://substack.net/roll_your_own_pubsub_with_dnode
// step (2)

var Hash = require('hashish');
var subscribers = {};

// the publishers calls the subscribers
function publish() {
  var args = arguments;
  Hash(subscribers).forEach(function(emit) {
    emit.apply(emit, args);
  });
}

// subscribers for testing purposes
subscribers.channel1 = function (ev, n) { console.log('channel1.' + ev + ': ' + n) };
subscribers.channel2 = function (ev, n) { console.log('channel2.' + ev + ': ' + n) };

// startup board
//    button on digital input: D4
//    slider on analog input: A0
//
var five = require('johnny-five');
var board = new five.Board({
  repl: false
});

board.on('ready', function() {

  var slider = new five.Sensor('A0');
  var button = new five.Button(4);

  slider.scale([0, 200]).on('slide', function() {
    publish('slider', this.value);
  });

  button.on('press', function() {
    publish('button', new Date().getTime());
  });

});

