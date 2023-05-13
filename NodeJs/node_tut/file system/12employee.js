// Implement a Node.js application to create a readable stream with an employee.txt file (add basic employee details in the file). 
// Read the student details from the above stream and
// send the data as a response to the client request from the browser.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const inputStream = fs.createReadStream('12employee.txt', 'utf8');
  inputStream.on('data', chunk => {
    res.write(chunk);
  });

  inputStream.on('end', () => {
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});