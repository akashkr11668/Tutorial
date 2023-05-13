const http = require('http');
const url = require('url');
const qs = require('querystring');
const MongoClient = require('mongodb').MongoClient;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <form method="POST" action="/register">
        <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
           <input type="email" id="email" name="email" required><br>
        <label for="mobile">Mobile:</label>
        <input type="text" id="mobile" name="mobile" required><br>
        <input type="submit" value="Register">
      </form>
    `);
    res.end();
  } else if (req.method === 'POST') {

    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const {name, email, mobile} = qs.parse(body);
      MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end();
          return;
        }
        const db = client.db('testdb');
        const collection = db.collection('student_registration');
        collection.insertOne({name, email, mobile}, (err, result) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end();
            return;
          }
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write('Registration Successful!');
          res.end();
        });
      });
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
