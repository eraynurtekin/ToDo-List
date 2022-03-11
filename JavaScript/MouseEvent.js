const cardBody = document.querySelectorAll(".card-body")[1];

const title= document.querySelector("#tasks-title");

// //Click Event
// title.addEventListener("click",run);

// //Double Click

// title.addEventListener("dblclick",run)

//Mouse Down
// title.addEventListener("mousedown",run)

// //Mouse Up
// title.addEventListener("mouseup",run)

// //MouseOver
// title.addEventListener("mouseover",changeText)

// function run(e){

//     console.log(e.type);
// }

// function changeText(e){
//     title.textContent= "Eray Değiştirdi."
// }

//mouseOut
// title.addEventListener("mouseout",changeText)
// function changeText(e){
//          title.textContent= "Eray Değiştirdi."
//      }

// cardBody.addEventListener("mouseover",run);
// function run(e){

//      console.log(e.type);
//      }


//Mouse Enter ve Mouse Leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);
function run(e){

         console.log(e.type);
     }