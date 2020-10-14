
let movies = [
    {
        title: "All about that Bass",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "Lean on",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "Sugar",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "Roar",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "Hello",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "Blank Space",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "Shake it off",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Sorry",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Uptown Funk",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "See you again",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {
   // let sortedMovies = sortMoviesByRank(movies);
  let sortedMovies = sortMoviesByAttr(movies,'rank');
    // Display Movies list
    displayMovies(movies);
}


function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


function sortMoviesByRank(movies){
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {

      let max_obj = movies[j];
      //will have id, title and rank
      let max_location = j;

      for (let i = j; i < movies.length; i++) {
          if (movies[i].rank > max_obj.rank) {
              // Know max AND it's index (location)
             max_obj = movies[i]
              max_location = i
          }
      }
      // swap the first and the last
      movies[max_location] = movies[j] // --> 10
      movies[j] = max_obj
  }

  return movies
}


function sortMoviesByAttr(movies, sortAttr){
    for (let j = 0; j < movies.length - 1; j++) {

        let max_obj = movies[j];
        //will have id, title and rank
        let max_location = j;
        let max = getMaxMovieObject(movies, j, sortAttr);
        max_obj = max.max_obj;
        max_location = max.max_index;
  
        /*for (let i = j; i < movies.length; i++) {
            if (movies[i][sortAttr]> max_obj[sortAttr]) {
                // Know max AND it's index (location)
               max_obj = movies[i]
                max_location = i
            }
        }
        */
        // swap the first and the last
        movies[max_location] = movies[j] // --> 10
        movies[j] = max_obj
    }
  
    return movies;
  }



function getMaxMovieObject(movies, start, sortAttr){
  // Code from previous findMaxHelper() function
  let max_obj = movies[start];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttr] > max_obj[sortAttr]) {
          max_obj = movies[i]
          max_location = i
      }
  }
  return {max_obj: max_obj, max_index: max_location}
}



