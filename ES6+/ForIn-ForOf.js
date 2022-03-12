const person = {

   name:"Eray Nurtekin",
   age:25,
   salary:6000

};

// const langs =["Python","Java","C++","PHP"]

// const name = "Eray"

//For In
//Object
// for(let prop in person) {
//     console.log(prop,person[prop])
// }
//Array
// for(let prop in langs){
//     console.log(prop,langs[prop])
// }

//String

// for(let index in name){
//     console.log(index,name[index])
// }

//For of üzerinde object üzerinde gezinemeyiz, array ve object üzerinde gezilebilir.
//Object

// for(let value of person){
//     console.log(value)
// }

//String

const name = "Eray Nurtekin"

for(let character of name){
 console.log(character)
}