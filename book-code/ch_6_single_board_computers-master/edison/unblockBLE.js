#!/usr/bin/node

var exec = require('child_process').exec;

var cmds = [
  "systemctl disable bluetoothd",
  "rfkill unblock bluetooth",
  "killall -9 bluetoothd"];

cmds.forEach(function(cmd) {
  exec(cmd, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});

