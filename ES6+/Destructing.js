//Destructing

// let number1,number2;
//  arr = [100,200,300,400];

// number1 = arr[0]
// number2 = arr[1]

//Destructing

// const [number1,number2] = arr;


//Obje Destructing

// const numbers = {


//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50

// };

// // const {number1,number2,number3} = numbers  HATA ALIRIZ!
// const {a:number1,c:number2,e:number3} = numbers; //Hata yok!


//  console.log(number1,number2,number3)

//Function Destructing

const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs(); 
console.log(lang1,lang2,lang3)


//Obje
const person = {
    name:"Eray Nurtekin",
    year:1997,
    salary:5000,
    showInfos : () => console.log("Bilgiler Gösteriliyor")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person

console.log(isim,yil,maas)
bilgileriGoster()
