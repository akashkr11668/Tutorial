const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.log('Query:', query);
  const searchTerm = query.searchTerm;

  if (req.method === 'GET' && req.url === '/') {
    // Serve the HTML form
    const form = fs.createReadStream('9form.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    form.pipe(res);
  } else if (req.method === 'POST' && req.url === '/search') {
    // Perform the search
    const results = performSearch(searchTerm);

    // Send the results as a response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(results);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function performSearch(searchTerm) {
  // Implement your search logic here
  // This is just a dummy example
  return `You searched for "${searchTerm}" and got some results`;
}
