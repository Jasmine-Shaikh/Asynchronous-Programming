// -------------------------Slide show-----------------------


var imageArray = ["https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR1,0,140,209_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg"
]


var index = 0;
var sliderImage = document.getElementById("sliderImage");
var slideshow = document.getElementById("slideshow");

function slide() {


    sliderImage.setAttribute("src", imageArray[index]);

    index++;
    if (index >= imageArray.length) {
        index = 0;
    }

}

setInterval("slide()", 3000);

//-----------------------------------Slide Show End-------------------------------

// ----------------------------------Movie List-------------------------------------

var movieList = [{
        movieTitle: "The Godfather",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
        releaseDate: 1972,
        imbdRatings: 9.2,

    },
    {
        movieTitle: "The Shawshank Redemption",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
        releaseDate: 1994,
        imbdRatings: 9.3,

    },
    {
        movieTitle: "Schindler's List",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1993,
        imbdRatings: 9,

    },
    {
        movieTitle: "Raging Bull",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY209_CR1,0,140,209_AL_.jpg",
        releaseDate: 1980,
        imbdRatings: 8.2,

    },
    {
        movieTitle: "Casablanca",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1942,
        imbdRatings: 8.5,

    },
    {
        movieTitle: "Citizen Kane",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1941,
        imbdRatings: 8.3,

    },
    {
        movieTitle: "Gone with the Wind",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1939,
        imbdRatings: 8.2,

    },
    {
        movieTitle: "The Wizard of Oz",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        releaseDate: 1939,
        imbdRatings: 8.1,

    },
    {
        movieTitle: "One Flew Over the Cuckoo's Nest",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        releaseDate: 1975,
        imbdRatings: 8.7,

    },
    {
        movieTitle: "Lawrence of Arabia",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR2,0,140,209_AL_.jpgv",
        releaseDate: 1962,
        imbdRatings: 8.3,

    },
    {
        movieTitle: "Vertigo",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1958,
        imbdRatings: 8.3,

    },
    {
        movieTitle: "Pyscho",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        releaseDate: 1960,
        imbdRatings: 8.5,

    },
    {
        movieTitle: "The Godfather: Part II",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
        releaseDate: 1974,
        imbdRatings: 9,

    },
    {
        movieTitle: "On the Waterfront",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1954,
        imbdRatings: 8.1,

    },
    {
        movieTitle: "Sunset Blvd.",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1950,
        imbdRatings: 8.4,

    },
    {
        movieTitle: "Forrest Gump",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR2,0,140,209_AL_.jpg",
        releaseDate: 1994,
        imbdRatings: 8.8,

    },
    {
        movieTitle: "The Sound of Music",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BM2Q3YWMzMWItMjY4NS00ZjQ4LWEwYzQtODMwMjU1ZDg4ZjA4XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1965,
        imbdRatings: 8.1,

    },
    {
        movieTitle: "12 Angry Men",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1957,
        imbdRatings: 9,

    },
    {
        movieTitle: "West Side Story",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1961,
        imbdRatings: 7.6,

    },
    {
        movieTitle: "Star Wars",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1977,
        imbdRatings: 8.6,

    },
    {
        movieTitle: "2001: A Space Odyssey",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        releaseDate: 1968,
        imbdRatings: 8.3,

    },
    {
        movieTitle: "E.T. the Extra-Terrestrial",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1982,
        imbdRatings: 7.9,

    },
    {
        movieTitle: "The Silence of the Lambs",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR1,0,140,209_AL_.jpg",
        releaseDate: 1991,
        imbdRatings: 8.6,

    },
    {
        movieTitle: "Chinatown",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX140_CR0,0,140,209_AL_.jpg",
        releaseDate: 1974,
        imbdRatings: 8.2,

    },


];

var movieListCopy = JSON.parse(JSON.stringify(movieList));

function displayMovies(movieList) {

    document.getElementById("movies").innerHTML = "";

    movieList.forEach(function(element) {
        var movieCard = document.createElement("div");
        movieCard.setAttribute("class", "movieCard")

        var movieTitle = document.createElement("h4");
        movieTitle.innerText = element.movieTitle;

        var moviePoster = document.createElement("img");
        moviePoster.src = element.moviePoster;

        var releaseDate = document.createElement("p");
        releaseDate.innerText = "Release Date: " + element.releaseDate;

        var imbdRatings = document.createElement("p");
        imbdRatings.innerText = "IMBD Ratings: " + element.imbdRatings;


        movieCard.append(movieTitle, moviePoster, releaseDate, imbdRatings);
        document.getElementById("movies").append(movieCard)

    })

}
displayMovies(movieList);



function highToLow() {

    movieListCopy.sort(function(a, b) {
        return b.imbdRatings - a.imbdRatings;
    })

    displayMovies(movieListCopy);

};

function lowToHigh() {
    movieListCopy.sort(function(a, b) {
        return a.imbdRatings - b.imbdRatings;
    })

    displayMovies(movieListCopy);

};