//Film Constructor
//Eski
// function Film(title,director,url){
//     this.title = title;
//     this.director = director;
//     this.url = url;
// }

//ES6

class Film{
    constructor(title,director,url,year,duration,imdb){
        this.title = title;
        this.director = director;
        this.url = url;
        this.year = year;
        this.duration = duration;
        this.imdb = imdb;
    }
}
