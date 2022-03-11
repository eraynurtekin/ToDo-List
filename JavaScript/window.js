//Window Objeleri...
// console.log(window)


//Confirm
// if(confirm("Emin Misiniz?")){
//     console.log("Silin");
// }
// else{
//     console.log("Silmeyin")
// }

//Prompt

// const cevap = prompt("2 + 2 = ?")
// if(cevap == 4){
//     console.log("Doğru")
// }
// else{
//     console.log("Yanlış")
// }
// console.log(cevap)

let value;
value = window.location;
value = window.location.host;

if(confirm("Sayfaya Yenilensin mi?")){
    window.location.reload()
}
else{
    console.log("Sayfa Yenilenmedi!")
}

console.log(value)