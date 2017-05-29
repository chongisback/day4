var movie;

function getSelectedMovie() {
  var movies = JSON.parse(window.localStorage.getItem('movies'));
  var movieId = parseInt(window.localStorage.getItem('movieId'));

  for(var i = 0; i<movies.length; i++){
    if(movies[i].id === movieId){
      movie = movies[i];
    }
  }
}

function display(movieObject){
  document.getElementById('title').innerHTML = movieObject.title;
}

getSelectedMovie();
display(movie);
