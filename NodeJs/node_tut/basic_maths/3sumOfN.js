// Create a node js application that takes a number 'n' as a user input and calculates the sum of n natural numbers 
// and stores the result in a file "result.txt" which already exists.
//  Also, "Success" message gets printed on console in case of success and "Error occurred" gets displayed on console if any error occurs.

const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n)) {
    console.error('Invalid input');
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  fs.writeFile('3result.txt', sum.toString(), (err) => {
    if (err) {
      console.error('Error occurred:', err);
    } else {
      console.log('Success');
    }
  });

  readline.close();
});