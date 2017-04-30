// simple pub-sub example inspired by 
//   http://substack.net/roll_your_own_pubsub_with_dnode
//

var Hash = require('hashish');
var subscribers = {};

// the publisher notifies the subscribers
function publish() {
  var args = arguments;
  Hash(subscribers).forEach(function(emit) {
    console.log(emit);
    console.log(args);
    emit.apply(emit, args);
  });
}

// board is publisher
//    button on digital input: D4
//    slider on analog input: A0
//
var five = require('johnny-five');
var board = new five.Board({
  port: '/dev/cu.PL2303-00002214',
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


// startup dnode server
var dnode = require('dnode');

dnode(function(client, conn) {

  // generate callback function for subscribers
  this.subscribe = function(emit) {
    console.log('new connection:  ' + conn.id);

    // emit function comes from client
    subscribers[conn.id] = emit;

    // cleanup if connection closes
    conn.on('end', function () {
      delete subscribers[conn.id];
    });
  };
}).listen(5050);

