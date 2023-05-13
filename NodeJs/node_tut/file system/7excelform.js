const express = require('express');
const app = express();
const Excel = require('exceljs');
const bodyParser = require('body-parser');

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form page
app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name"><br>

      <label for="email">Email:</label>
      <input type="email" name="email" id="email"><br>

      <label for="message">Message:</label>
      <textarea name="message" id="message"></textarea><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submissions
app.post('/submit', (req, res) => {
  // Extract the form data from the request body
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Create a new workbook and worksheet
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('Data');

  // Add the form data to the worksheet
  worksheet.addRow(['Name', 'Email', 'Message']);
  worksheet.addRow([name, email, message]);

  // Set the response headers to force a file download
  res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

  // Write the workbook to the response stream
  workbook.xlsx.write(res)
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal server error');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
