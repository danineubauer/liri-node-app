require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs'); 
var moment = require('moment');
moment().format();

//OMDb:
var axios = require('axios'); 

var theme = process.argv[2]; 
var search = process.argv.slice(3).join('+'); 

//find concert: 
const findConcert = function(search) { 
    axios
        .get( 'https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp')
        .then(function(response) { 
            var shortcut = response.data[0];
            var time = shortcut.datetime; 
            momentTime = moment(time).format('MM/DD/YYYY')
            const showData = [ 
                    '-------Displaying concert info-------',
                    'Artist name: ' + shortcut.artist.name,
                    'Name of venue: ' + shortcut.venue.name,
                    'Venue location: ' + shortcut.venue.city,
                    'Date of event: ' +  momentTime //use moment JS 
                ];
            console.log(showData.join('\n'));
        }, 
        function(err){ 
            if (err.response) {
                console.log('error: ', err);
            }
        })
}

const findMovie = function(search) { 
    axios
        .get(' http://www.omdbapi.com/?t=' + search + '&apikey=6dea1639')
        .then(function(response) { 
            console.log('url for movie works'); 
            // console.log(response); //displays all data
            // console.log(response.data);
            var shortResponse = response.data; 
            var showData = [
                '-------Displaying movie info-------',
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


//spotify-this-song:
var findSong = function(search) { 
    spotify.search({ type: 'track', query: search , limit: 1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var jsonData = data.tracks.items[0]; 
      
      var showData = [
        '-------Displaying song info-------',
        'Song Name: ' + jsonData.name,
        'Artist Name: ' + jsonData.artists[0].name, 
        'Spotify Link: ' + jsonData.href, 
        'Album Name: ' + jsonData.album.name, 
      ]
      console.log(showData.join('\n')); 
    });
}

//find file: 
const findFile = function() { 
    fs.readFile('random.txt', 'utf8', function(err, data) { 
    search = data; 
    findSong(data);
    })
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
    findSong(search);

} else if (theme === 'movie-this') { 
    console.log('searching for a movie'); 
    findMovie(search);

} else if (theme === 'do-what-it-says') { 
    console.log('do what it says'); 
    findFile();
}




