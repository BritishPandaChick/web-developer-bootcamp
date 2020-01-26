/* create array of movie objects Each movie has title, rating, hasWatched properties. */

var movies = [
  {
    title: "Beauty and the Beast",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Pride and Prejudice",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Isn't It Romantic?",
    rating: 3,
    hasWatched: false
  },
  {
    title: "Aquaman",
    rating: 4,
    hasWatched: false
  }
];

/* iterate through array and print out
You have watched "Movie" - rating
You have not seen "movie" - rating */

for (var i=0; i < arr.length; i++) {
  if (movies[i].hasWatched === true) {
    console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
  } else {
    console.log("You have not seen " + movies[i].title + " - " + mmovies[i].rating + " stars");
  }
}

//forEach
movies.forEach(function(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched";
  } else {
    result += "not seen";
  }
  results += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
});

//refactored version
function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched";
  } else {
    result += "not seen";
  }
  results += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
