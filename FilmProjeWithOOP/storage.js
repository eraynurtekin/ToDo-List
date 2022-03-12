function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
        let films = this.getFilmsFromStorage();

        films.push(newFilm);
        /*
        Objelerimizi ekliyoruz
            [
                {title:"adı",director:"yönetmen".... }
            ]

        */

            localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") ===null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            //Arraydan silmek için splice
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){
   
    
    localStorage.removeItem("films");
    
}