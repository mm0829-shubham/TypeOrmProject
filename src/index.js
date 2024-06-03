const fs = require('fs');
const path = require('path');

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'response.json');

function readJsonFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, file) => {
      if (err) {
        reject(err);
      } else {
        try {
          const data = JSON.parse(file);
          resolve(data);
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    });
  });
}

let responseData = null;

readJsonFile(jsonFilePath)
  .then((data) => {
    responseData = data;
    console.log(responseData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

module.exports = { responseData };
