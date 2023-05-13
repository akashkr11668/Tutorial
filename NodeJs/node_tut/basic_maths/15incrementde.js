const express = require('express');
const app = express();

// middleware to parse request body as JSON
app.use(express.json());

// middleware to serve static files from the "public" directory
app.use(express.static('public'));

// middleware to perform arithmetic operations
app.use((req, res, next) => {
  const num = parseInt(req.body.number);

  if (isNaN(num)) {
    return res.status(400).send('Invalid number');
  }

  req.number = num;
  next();
});

// route to handle POST requests to /calculate
app.post('/calculate', (req, res) => {
  const { number } = req;
  const { operation } = req.body;

  let result;

  switch (operation) {
    case '++':
      result = number + 1;
      break;
    case '--':
      result = number - 1;
      break;
    case 'square':
      result = number * number;
      break;
    default:
      return res.status(400).send('Invalid operation');
  }

  res.send(result.toString());
});

// start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});