const express = require('express');

const http = require('http');
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app)
const io = new Server(server)

let count = 0
io.on('connection', (socket) => {
    console.log('a user connected', 'user is',socket.id);
    count++
    console.log(count)

  });

app.use(express.static(path.resolve("./public")))

app.get('/', (req, res)=>{
  return  res.sendFile('/public/index.html')
})


server.listen(9000,()=>{
    console.log("server is running on http://localhost:9000")
})