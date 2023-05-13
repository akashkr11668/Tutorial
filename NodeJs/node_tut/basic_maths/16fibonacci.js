const http = require('http');
const url = require('url');
const fs = require('fs');

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/') {
    fs.readFile('fibonaci.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (pathname === '/fibonacci' && query.n) {
    const n = parseInt(query.n);
    const result = fibonacci(n);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(result.toString());
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
