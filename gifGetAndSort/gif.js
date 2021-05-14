// const fetch = require("node-fetch");
// let getGiphy = fetch('http://api.giphy.com/v1/gifs/random', {
//         headers: {
//             "api_key": "7BBUGpeJHWBdvGXh3McmtkRpR5ukZ6gy",
//         },
//     })
//     .then( (response) => {
//         console.log('Request succeeded with JSON response');
// 		console.log(response);
//     })
//     .catch( (error) => {
//         console.log('Request failed', error);
//     });
const https = require('https');
const fetch = require("node-fetch");
const fs = require('fs');

let arrNames = [];
(async () => {
    let response = await fetch('http://api.giphy.com/v1/gifs/random', {
        headers: {
            "api_key": "7BBUGpeJHWBdvGXh3McmtkRpR5ukZ6gy",
        },
    })
    let gifs = await response.json();
    arrNames = Object.keys(gifs.data.images);
    // console.log(response);
    // console.log(gifs.data.images);
    // console.log(arrNames);
    console.log(gifs.data.images[arrNames[0]].url || gifs.data.images[arrNames[0]].mp4);
    let counter = 0;
    while(counter < 10)
    {
    	let file = fs.createWriteStream('file' + counter + '.mp4');
    	request = https.get(gifs.data.images[arrNames[counter]].mp4 || gifs.data.images[arrNames[counter]].url, function(response) {
  			response.pipe(file);
  			});
    	counter++;
    }

})()