// Create a node.js web server application with the HTTP module to perform sort operations on a
// given set of values. Accept a series of values from the input text fields of the client page and
// provide the output values as a response with the click event on a button.

// input types      =>     10, 5, 8, 3

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head>
          <title>Sort Values</title>
        </head>
        <body>
          <h1>Sort Values</h1>
          <form action="/sort" method="post">
            <label for="values">Values:</label>
            <input type="text" name="values" id="values">
            <br>
            <button type="submit">Sort</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  } else if (req.url === '/sort' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = querystring.parse(body);
      const values = data.values.split(',').map(Number);
      const sortedValues = values.sort((a, b) => a - b);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <html>
          <head>
            <title>Sorted Values</title>
          </head>
          <body>
            <h1>Sorted Values</h1>
            <p>Values: ${values}</p>
            <p>Sorted Values: ${sortedValues}</p>
            <button onclick="window.location.href='/'">Back to Form</button>
          </body>
        </html>
      `);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});