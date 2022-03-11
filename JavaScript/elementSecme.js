// Element Id'e Göre Seçme:

let element;

element=document.getElementById("todo-form");
element=document.getElementById("tasks-title")

//Element Class'a göre Seçme:
element =document.getElementsByClassName("list-group-item")[2];
element = document.getElementsByClassName("card-header");

//Element Tag'e Göre Seçme:
element = document.getElementsByTagName("div");

//Tek methodla 3nü birden yapabiliyoruz.. QUERY SELECTOR
//Query-Selector - Css Selector (query tek bir elementi seçiyor)

element = document.querySelector("#todo-form")
element = document.querySelector("#tasks-title")
element = document.querySelector(".list-group-item");
element = document.querySelector("li");


console.log(element);