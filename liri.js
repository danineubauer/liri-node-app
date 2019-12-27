require("dotenv").config();

var keys = require("./keys.js");
const fs = require('fs'); 

//OMDb:
var axios = require('axios'); 

const findMovie = function(search) { 
    axios
        .get(' http://www.omdbapi.com/?i=tt3896198' + '&apikey=6dea1639')
        .then(function(response) { 
            console.log('url for movie works'); 
            // console.log(response); //displays all data
            // console.log(response.data);
            var shortResponse = response.data; 
            var showData = [
                'Title of movie: ' + shortResponse.Title,
                'Year the movie came out: ' + shortResponse.Year,
                'IMDB Rating of the movie: ' + shortResponse.Ratings[0].Value,
                'Rotten Tomatoes Rating of the movie: ' + shortResponse.Ratings[1].Value,
                'Country where the movie was produced: ' + shortResponse.Country,
                'Language of the movie: ' + shortResponse.Language,
                'Plot: ' + shortResponse.Plot, 
                'Actors: ' + shortResponse.Actors,
            ]; 
            console.log(showData.join('\n ')); 
        }, 
        function(error) { 
            if(error.response) { 
                console.log(error); 
            }
        }
    );
}



//spotify API:
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});



var theme = process.argv[2]; 
var search = process.argv.slice(3).join(' '); 


//spotify-this-song:
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



