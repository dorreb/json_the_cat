// const fs = require('fs');
const request = require('request');

const breed = process.argv[2];
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;



request(apiUrl, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`No data found for the breed "${breed}"!`);
    return;
  }


  console.log(data[0].description);
  console.log(typeof data);
});