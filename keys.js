console.log('this is loaded');

require("dotenv").config();



//Find Concert: 

//create constructor: 
var Keys = function() { 
  this.findMovie = function(search) { 
    var URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + process.env.MOVIE_API;
    axios.get(URL).then(function(response) { 
      var jsonData = response.data;
    }) 
  }
}

// //spotify:
// //Find song: 
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'track', query: 'beyonce' , limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var jsonData = data.tracks.items[0]; 
  
  var showData = [
    'Song Name: ' + jsonData.name,
    'Artist Name: ' + jsonData.artists[0].name, 
    'Spotify Link: ' + jsonData.href, 
    'Album Name: ' + jsonData.album.name, 
  ]
  console.log(showData); 

});


//Find Movie:






//AXIOS:



//creating a constructor:
// var Liri = function() { 

//   this.findSearch = function(concert-this) { 
//     var URL = 

//     axios.get(URL).then()
//   }
// }
