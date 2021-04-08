const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    fs.writeFile(path, body, () => {
    console.log('Downloaded and saved 1235 bytes to ./index.html.')
    })
  }
});