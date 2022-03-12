class UI{
    
    static addFilmToUI(newFilm){
    
        const filmList = document.querySelector("#films")
    
        filmList.innerHTML += `
    
         <tr>
          <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td>${newFilm.year}</td>
                <td>${newFilm.duration}</td>
                <td>${newFilm.imdb}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr> 
        
        
        `
    }
    
    static clearInputs(element1,elemet2,element3,element4,element5,element6){
    
        element1.value = "";
        elemet2.value = "";
        element3.value= "";
        element4.value= "";
        element5.value= "";
        element6.value= "";
    }
    
    static displayMessages(message,type){
            const cardBody = document.querySelectorAll(".card-body")[0];
            //Alert divini oluşturma
    
            const div = document.createElement("div");
            div.className = `alert alert-${type} `;
            div.textContent = message;
            cardBody.appendChild(div);
    
        const myInterval = setTimeout(() => {
            div.remove();
        }, 2000);
    
    
    }
    
    
    static loadAllFilms(films){
        const filmList = document.getElementById("films");
    
        films.forEach(film => {
            filmList.innerHTML +=`<tr>
                 <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                  <td>${film.title}</td>
                  <td>${film.director}</td>
                  <td>${newFilm.year}</td>
                  <td>${newFilm.duration}</td>
                  <td>${newFilm.imdb}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                  </tr> `
    
     
                });
    }
    
    static deleteFilmFormUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films")
    
        while(filmList.firstElementChild !== null){
            //Child old. sürece
            filmList.firstElementChild.remove();
        }
    }
    

}

