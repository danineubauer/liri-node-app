console.log('this is loaded');

var liri = require('./liri');
const fs = require('fs'); 
const axis = require('axios'); 

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

  


//Find Movie:






//AXIOS:



//creating a constructor:
// var Liri = function() { 

//   this.findSearch = function(concert-this) { 
//     var URL = 

//     axios.get(URL).then()
//   }
// }
