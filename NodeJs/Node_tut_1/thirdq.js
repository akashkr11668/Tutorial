const app = require('express')();
const server = require('http').createServer(app);

 
const io = require('socket.io')(server);

let numUsers = 0;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
io.on('connection', socket => {
  let addedUser = false;

  
  socket.on('new message', data => {
    
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });
  socket.on('add user', username => {
    if (addedUser) return;

    
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', { numUsers });

   
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers
    });
  });

 
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

    
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers
      });
    }
  });
});

server.listen(3000, () => {
  console.log('listening to port 3000');
});
