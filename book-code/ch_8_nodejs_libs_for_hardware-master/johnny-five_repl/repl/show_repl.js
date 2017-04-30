var repl = require('repl');

var robot = {
  blink: function(color, delay) {
    setTimeout(function() {
      console.log('** ' + color + ' **');
    }, delay)
  }
}

var local = repl.start('command> ');
local.context.robot = robot;


