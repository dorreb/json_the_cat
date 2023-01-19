const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback("error", null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`No data found for the breed "${breedName}"!`, null);
      return;
    }

    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };

