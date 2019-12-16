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



//spotify:
//Find song: 
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'track', query: 'beyonce' , limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var jsonData = JSON.stringify(data,null,2); 
  
  // var showData = [
  //   'Song Name: ' + jsonData.tracks.items[0],
  //   'Artist Name: ' + jsonData.tracks.items[0].album.artists[0].name,
  //   'Spotify Link: ' + jsonData.track.items[0].album.href,
  //   'Album Name: ' + jsonData.tracks.items[0].album.name,
  // ]
  console.log(jsonData.tracks.items); 
// console.log(JSON.stringify(data,null,2));

// songName = data.tracks.items.name;
// artistName = data.tracks.items.artists; 
// spotifyLink = data.tracks.items.external_urls;
// albumName = data.tracks.items.album.name;

//artist, name, Spotify link, album 
//  name = data.name
//  artist = data.

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
