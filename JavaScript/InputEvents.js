const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa Yüklendi");
// }


// Focus

// filter.addEventListener("focus",run)
// //Blur
// filter.addEventListener("blur",run)


//Paste
// filter.addEventListener("paste",run)

//Copy
// filter.addEventListener("copy",run);

//Cut
filter.addEventListener("cut",run);

function run(e){
    console.log(e.type)
}