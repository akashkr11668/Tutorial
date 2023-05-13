const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    res.send(`
      <html>
        <head>
          <title>Arithmetic Operations Result</title>
        </head>
        <body>
          <h1>Arithmetic Operations Result</h1>
          <p>Num1: ${num1}</p>
          <p>Num2: ${num2}</p>
          <p>Sum: ${sum}</p>
          <p>Difference: ${difference}</p>
          <p>Product: ${product}</p>
          <p>Quotient: ${quotient}</p>
          <button onclick="window.location.href='/'">Back to Form</button>
        </body>
      </html>
    `);
  } else {
    res.send(`
      <html>
        <head>
          <title>Arithmetic Operations Form</title>
        </head>
        <body>
          <h1>Arithmetic Operations Form</h1>
          <form action="/" method="get">
            <label for="num1">Num1:</label>
            <input type="number" name="num1" id="num1" required>
            <br>
            <label for="num2">Num2:</label>
            <input type="number" name="num2" id="num2" required>
            <br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
