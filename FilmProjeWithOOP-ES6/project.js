const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url")
const yearElement = document.getElementById("year")
const imdbElement = document.getElementById("imdb")
const durationElement = document.getElementById("duration")
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films");





//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilm)
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value
    const url = urlElement.value;
    const duration = durationElement.value;
    const year = yearElement.value;
    const imdb = imdbElement.value;

    if(title === "" || director ==="" || url=== "" || year ==="" || duration ==="" || imdb === ""){
        //Hata
        UI.displayMessages("Tüm Alanları Doldurun","danger")
    }
    else{
        //Yeni Film Oluşturduk
        const newFilm = new Film(title,director,url,duration,year,imdb);
        UI.addFilmToUI(newFilm); //Arayüze film Ekleme
        UI.displayMessages("Film Başarıyla Eklendi","success")
        Storage.addFilmToStorage(newFilm); //Storage Film Ekleme
    }

    UI.clearInputs(titleElement,urlElement,directorElement,yearElement,durationElement,imdbElement);
    
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        if(confirm("Filmi Silmek İstediğinize Emin Misiniz ?")){
            UI.deleteFilmFormUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme İşlemi Başarılı","info")
        }
        console.log("Silinmedi.")
    }
}

function clearAllFilm(){
    if(confirm("Tüm Filmleri Silmek İstediğinize Emin Misiniz ?")){

        UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}
}