// sample dnode client
//   inspired by http://substack.net/roll_your_own_pubsub_with_dnode

var dnode = require('dnode');
var EventEmitter = require('events').EventEmitter;

dnode.connect(5050, function(remote) {
  var subscriber = new EventEmitter;
 
  // from server to client
  subscriber.on('slider', function(n) {
    console.log('slider: ' + n);
  });

  subscriber.on('button', function(n) {
    console.log('button: ' + n);
  });

  subscriber.on('all', function(ev) {
    console.log(ev);
  });

  // attach current context to a listener
  var emitter = subscriber.emit.bind(subscriber);

  // subscribe emitter to publisher
  remote.subscribe(emitter);
 
  // from client to server
  // remote.write('test');
});

