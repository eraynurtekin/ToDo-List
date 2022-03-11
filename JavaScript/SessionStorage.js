//Session Storage- Key a Value

//Butonları Seçmek
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear")

//Inputlar

const addkey = document.querySelector("#addkey")
const addvalue = document.querySelector("#addvalue")
const deletekey = document.querySelector("#deletevalue")


add.addEventListener("click",addItem)
del.addEventListener("click",deleteItem)
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value)
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value)
}
function clearItem(e){
    sessionStorage.clear();
}