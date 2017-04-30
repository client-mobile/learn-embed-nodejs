#!/usr/bin/env node

// example how to use MD25 motor shield with JavaScript
// based on examples by Andrey Nechypurenko
// https://github.com/andreynech/simplenode

var m = require('mraa');
var wire = new m.I2c(0);

var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
var speed = argv.s;

// Configure
var address = 0xB0 >> 1;
wire.address(address);

// point to your i2c address, debug provides REPL interface

// For RPi users:
// var wire = new i2c(address, {device: '/dev/i2c-1'});

// Helper function for motor control

function setOperationMode(mode) {
    wire.writeReg(15, mode);
}

function stopRotation() {
    wire.writeReg(0, 128);
    wire.writeReg(1, 128);
}

function setSpeedAndTurn(speed, turn) {
    wire.writeReg(0, speed);
    wire.writeReg(1, turn);
}

// Rotate motors forward and backward

console.log('Start');

setOperationMode(2);
stopRotation();

function setSpeed() {
  // if speed is smaller than 128 ==> fwd
  // if speed is bigger than 128 ==> backward
  setSpeedAndTurn(this.speed,128);
}
setSpeed.bind({speed: speed});
setTimeout(setSpeed, 1500);
