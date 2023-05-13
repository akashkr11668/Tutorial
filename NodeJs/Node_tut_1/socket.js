const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let userCount = 0;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  userCount++;
  console.log('A user connected. Total users:', userCount);
  io.emit('user count', userCount);

  socket.on('disconnect', () => {
    userCount--;
    console.log('A user disconnected. Total users:', userCount);
    io.emit('user count', userCount);
  });

  socket.on('chat message', (msg) => {
    console.log('Message:', msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
