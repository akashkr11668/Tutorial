const fs = require('fs');

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
};

const output = fs.createWriteStream('sample.txt');

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    output.write(i + '\n');
  }
}

output.end(() => {
  console.log('Task Completed');
});