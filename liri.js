require("dotenv").config();

var keys = require("./keys.js");
const fs = require('fs'); 
const axis = require('axios'); 

const Spotify = require('node-spotify-api');

//spotify API:
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});



var theme = process.argv[2]; 
var search = process.argv.slice(3).join(' '); 


var findSong = function(search) { 
    spotify.search({ type: 'track', query: search , limit: 1 }, function(err, data) {
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
}




//If no search happened: 
if (!theme) { 
    theme = 'concert-this';
}
if (!search) { 
    search = 'Beyonce';
}


//themes searches:
if (theme === 'concert-this') { 
    console.log('searching for a concert');
    findConcert(search);

} else if (theme === 'spotify-this-song') { 
    console.log('searching for a song');
    console.log('You searched for: ')
    findSong(search);

} else if (theme === 'movie-this') { 
    console.log('searching for a movie'); 
    findMovie(search);

} else if (theme === 'do-what-it-says') { 
    console.log('do what it says')
}


//node liri.js concert-this <artist/band name here>
// concert-this
    //name, venue location, date of event (moment)
    //codingbootcamp as app_id
        //https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp
// spotify-this-song
    //artist, name, Spotify link, album 
// movie-this
// do-what-it-says



