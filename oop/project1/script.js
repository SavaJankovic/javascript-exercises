var listOfMovie = [];

function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = parseInt(length);
}

Movie.prototype.getData = function () {
    return this.name + ", " + this.genre + ", " + this.length + "  min";
}

function Program(date) {
    this.date = new Date(date);
}


Program.prototype.getData = function () {
    var minAllMovie = 0;
    var numOfMovies = listOfMovie.length;
    var datum = this.date.getDate() + (this.date.getMonth() + 1) + this.date.getFullYear();

    for (var i = 0; i < listOfMovie.length; i++) {

        minAllMovie += listOfMovie[i].length;
    }

    return datum + ", " + numOfMovies + " movies, "+ " duration: " + minAllMovie + "min";
}






var divMovie = document.querySelector("#newMovie");
var ulMovie = document.createElement("ul");
divMovie.appendChild(ulMovie);

function createMovie() {
    var title = document.querySelector("#titleMovie").value;
    var length = document.querySelector("#lengthMovie").value;
    var select = document.querySelector("#genreMovie");
    var genre = select.options[select.selectedIndex].text;

    var movie = new Movie(title, genre, length);

    var liMovie = document.createElement("li");
    var textMovie = document.createTextNode(movie.getData());

    liMovie.appendChild(textMovie);
    ulMovie.appendChild(liMovie);

    listOfMovie.push(movie);

}

document.querySelector(".createMovie").addEventListener("click", function () {

    createMovie();

});


var divProgram = document.querySelector("#newProgram");
var ulProgram = document.createElement("ul");

divProgram.appendChild(ulProgram);

function createProgram() {
    var dateProgram = document.querySelector("#dateProgram").value;

    var program1 = new Program(dateProgram);


    var liProgram = document.createElement("li");
    var dateOfProgram = document.createTextNode(program1.getData());

    liProgram.appendChild(dateOfProgram);
    ulProgram.appendChild(liProgram);

}
document.querySelector(".createProgram").addEventListener("click", function () {
    createProgram();
});