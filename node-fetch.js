const fetch = require("node-fetch");
const {gzip, ungzip} = require('node-gzip');
const fs = require('fs');
const dataURL = "https://fingertips.phe.org.uk/documents/Historic%20COVID-19%20Dashboard%20Data.xlsx";
const filename = "Historic COVID-19 Dashboard Data.xlsx"
const options = {
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'none',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
    }
};


async function getData(url) {
  try {
    const response = await fetch(url, options);
    console.error(response.headers);
    const text = await response.text();
    fs.writeFileSync(filename, text, { encoding: false} );
  } catch (error) {
    console.log(error);
  }
};

getData(dataURL);
