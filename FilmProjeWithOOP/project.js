const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films");
//UI Objesini başlatma

const ui = new UI();

//Storage Objesi Üret

const storage = new Storage();


//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilm)
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value
    const url = urlElement.value;

    if(title === "" || director ==="" || url=== ""){
        //Hata
        ui.displayMessages("Tüm Alanları Doldurun","danger")
    }
    else{
        //Yeni Film Oluşturduk
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); //Arayüze film Ekleme
        ui.displayMessages("Film Başarıyla Eklendi","success")
        storage.addFilmToStorage(newFilm); //Storage Film Ekleme
    }

    ui.clearInputs(titleElement,urlElement,directorElement);
    
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFormUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme İşlemi Başarılı","info")
    }
}

function clearAllFilm(){
    if(confirm("Tüm filmleri silmek istediğinize Emin Misiniz ?")){

    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}
}