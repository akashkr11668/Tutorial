const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name"><br>

      <label for="regNo">Registration Number:</label>
      <input type="text" name="regNo" id="regNo"><br>

      <label for="rollNo">Roll Number:</label>
      <input type="text" name="rollNo" id="rollNo"><br>

      <label for="mobileNo">Mobile Number:</label>
      <input type="text" name="mobileNo" id="mobileNo"><br>

      <label for="email">Email:</label>
      <input type="text" name="email" id="email"><br>

      <input type="submit" value="Submit">
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { name, regNo, rollNo, mobileNo, email } = req.body;
  if (!name || !regNo || !rollNo || !mobileNo || !email) {
    return res.send('Please fill out all fields.');
  }
  if (mobileNo.length !== 10) {
    return res.send('Mobile number must be 10 digits.');
  }
  if (!email.includes('@')) {
    return res.send('Invalid email address.');
  }
  res.send(`
    <p>Student information:</p>
    <ul>
      <li>Name: ${name}</li>
      <li>Registration Number: ${regNo}</li>
      <li>Roll Number: ${rollNo}</li>
      <li>Mobile Number: ${mobileNo}</li>
      <li>Email: ${email}</li>
    </ul>
  `);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
