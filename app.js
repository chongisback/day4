var movies = [];
var idCounter = 1;

class Movie{
  constructor(id,title,desc,imgUrl,rating){
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.imgUrl = imgUrl;
    this.rating = rating;
  }
}

//CREATE
function add() {
  idCounter++;
  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;
  var imgUrl = document.getElementById('imgUrl').value;
  var rating = document.getElementById('rating').value;
  movies.push(new Movie(idCounter,title,desc,imgUrl,rating));
  idCounter++;
  clearboxes();
  display();
}

function clearboxes() {
  document.getElementById('title').value="";
  document.getElementById('desc').value="";
  document.getElementById('imgUrl').value="";
  document.getElementById('rating').value="";
}
//READ
function display() {
  loadFromLocalStorage();
  var tableHtml = "";
  for(var i = 0; i<movies.length; i++){
    tableHtml += `<tr>`;
    tableHtml += `<td><a onclick="saveMovieId(${movies[i].id})" href="detail.html">${movies[i].title}</a></td>`;
    tableHtml += `<td>${movies[i].rating}</td>`;
    tableHtml += `<td><button class="btn btn-danger btn-xs">X</button></td>`
    tableHtml += `</tr>`;
  }
  document.getElementById('movieTable').innerHTML = tableHtml;
}

function saveMovieId(id) {
  window.localStorage.setItem('movieId', id);
}

function addInitialData(){
  movies.push(new Movie(idCounter,'Life at Coder Camps','Learn Programming','https://pbs.twimg.com/profile_images/378800000139847457/71de3a478d6b7d85b173f7d3e71adf89_400x400.png',7))
  idCounter++;
  movies.push(new Movie(idCounter,'Iron Man', 'Iron Man fights bad guys','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zLtlg8TAYNmvKV2bVW-CjUd2u04g6avwljcS_xf37SWb4mx_',10))
  idCounter++;
}

function saveToLocalStorage(){
  window.localStorage.setItem('movies', JSON.stringify(movies));
}
function loadFromLocalStorage(){
  movies = JSON.parse(window.localStorage.getItem('movies'));
}

addInitialData();
saveToLocalStorage();
display();
