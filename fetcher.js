const request = require('request');
const fs = require('fs');
const isValid = require('is-valid-path');
const url = process.argv[2];
const path = process.argv[3];

request(url, (err, response, body) => {
  fs.access(path, fs.F_OK, (err) => {
    if (isValid(path)) {
      throw new Error('This path is not valid')
    }
  });
  if (err) {
    throw new Error('Something went wrong with URL')
  } else {
    fs.writeFile(path, body, () => {
    console.log('Downloaded and saved 1235 bytes to ./index.html.')
    })
  }
});