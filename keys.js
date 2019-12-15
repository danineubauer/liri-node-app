console.log('this is loaded');

require("dotenv").config();

const Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data,null,2)); 
});



//SPOTIFY:
 
// var spotify = new Spotify({
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// });



//AXIOS:



//creating a constructor:
// var Liri = function() { 

//   this.findSearch = function(concert-this) { 
//     var URL = 

//     axios.get(URL).then()
//   }
// }
