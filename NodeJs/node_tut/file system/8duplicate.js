const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/duplicate') {
    // Read the source file
    fs.readFile('8source.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal server error');
        return;
      }
      // Write the duplicate file
      fs.writeFile('8duplicate.txt', data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal server error');
            return;
        }

        console.log('File duplicated successfully');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File duplicated successfully');
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
