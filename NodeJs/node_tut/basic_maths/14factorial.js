const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url.startsWith('/factorial')) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const number = parseInt(querystring.parse(body).number);
      const result = factorial(number);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <html>
          <head>
            <title>Factorial Calculator</title>
          </head>
          <body>
            <h1>Factorial Calculator</h1>
            <p>The factorial of ${number} is ${result}.</p>
            <button onclick="window.location.href='/';">Back to Form</button>
          </body>
        </html>
      `);
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head>
          <title>Factorial Calculator</title>
        </head>
        <body>
          <h1>Factorial Calculator</h1>
          <form action="/factorial" method="post">
            <label for="number">Number:</label>
            <input type="number" name="number" id="number" required>
            <br>
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }
});

const factorial = num => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

server.listen(3000, () => {
  console.log('Server running on port 3000');
});