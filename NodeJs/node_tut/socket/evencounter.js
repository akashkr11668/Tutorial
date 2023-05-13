const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;

io.on('connection', (socket) => {
  console.log('A client has connected.');

  // Display student details in the server console
  console.log('Student name: [your name]');
  console.log('Student ID: [your ID]');

  // Trigger events to display even numbers every 2 seconds on the client web page
  let count = 0;
  setInterval(() => {
    count += 2;
    socket.emit('even-numbers', count);
  }, 2000);

  socket.on('disconnect', () => {
    console.log('The client has disconnected.');
    console.log('Thank you!');
  });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
  });
  

server.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});