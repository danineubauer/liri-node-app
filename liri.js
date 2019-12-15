require("dotenv").config();

var keys = require("./keys.js");

//spotify API:
var spotify = new Spotify(keys.spotify);

var theme = process.argv[2]; 
var search = process.argv.slice(3).join(' '); 

//If no search happened: 
if (!theme) { 
    search = 'concert-this';
}
if (!search) { 
    search = 'Beyonce';
}


//themes searches:
if (theme === 'concert-this') { 
    console.log('searching for a concert');

} else if (theme === 'spotify-this-song') { 
    console.log('searching for a song');
    
} else if (theme === 'movie-this') { 
    console.log('searching for a movie'); 
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