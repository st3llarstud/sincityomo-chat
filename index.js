const sincityomo_service = require('sincityomo-service');
const sincityomo_chat = require('sincityomo-chat');
const socket.io = require('socket.io');
const solc = require('solc');
const web3 = require('web3');
const sequelize = require('sequelize');
const ethereumjs_tx = require('ethereumjs-tx');
const passport = require('passport');
const webpack_cli = require('webpack-cli');
const mysql = require('mysql');
const commander = require('commander');
const react = require('react');
const body_parser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const fs_extra = require('fs-extra');
const jquery = require('jquery');
const react_redux = require('react-redux');

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

const net = require('net');
const client = net.connect({ port: 8124 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server! Love, Client.');
});

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Hello from foo [%d]', 123);

const name = 'John Doe';
console.log(`Hello, ${name}!`);

console.log(`Current directory: ${__dirname}`);

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
  console.log(`Custom Event Received: ${message}`);
});
eventEmitter.emit('customEvent', 'Hello EventEmitter');

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

for (const char of 'Hello') {
  console.log(char);
}