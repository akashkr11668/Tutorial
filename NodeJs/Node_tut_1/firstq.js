const fs = require('fs');

fs.readFile('demo.txt', 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }

  if (data.length > 0) {
    console.log(data);
  } else {
    console.log('Empty File');
  }
});