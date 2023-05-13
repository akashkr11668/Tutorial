const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let visitorCount = 0;

io.on('connection', (socket) => {
  // Display student details in server console
  console.log(`Student Name: [YOUR NAME]`);
  console.log(`Student ID: [YOUR ID]`);

  // Increment visitor count on every new connection
  visitorCount++;

  // Broadcast odd visitor count to all clients on new connection
  if (visitorCount % 2 !== 0) {
    io.emit('oddVisitorCount', visitorCount);
  }

  // Set up Socket.io event handlers for client disconnection
  socket.on('disconnect', () => {
    visitorCount--;

    // Broadcast odd visitor count to all clients on client disconnection
    if (visitorCount % 2 !== 0) {
      io.emit('oddVisitorCount', visitorCount);
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/socket.html');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});