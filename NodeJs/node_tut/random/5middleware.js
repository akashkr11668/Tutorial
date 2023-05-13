const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware function 1');
  next();
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware function 2');
  next();
});

// Route handler
app.get('/', (req, res) => {
  console.log('Route handler');
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
