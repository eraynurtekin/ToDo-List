let value;


const numbers = [34,65,12,543,32,6,11,1];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C#","PHP"];
const a =["Merhaba",22,null,undefined,3.14];


value = numbers.length;

value = numbers[0]
value = numbers[2];


numbers[2] = 1000;
value = numbers

//Index of

value = numbers.indexOf(1000);

//Arrayin Sonuna değer ekleme- Push
numbers.push(2000);
value =numbers;

numbers.unshift(5000)
value = numbers;

//Sonundan Değer Atma
numbers.pop()
value = numbers;

//Başından Değer Atma
numbers.shift()
value=numbers

//Belli bir indiksten atmamızı sağladı
numbers.splice(0,3)
value = numbers;

//Terse Çevirme için
numbers.reverse();
value = numbers;

value = numbers.sort(function(x,y){
    //Küçükten büyüğe sıralıyor
    return x-y; 
});

value = numbers.sort(function(x,y){
    //Büyükten küçüğe sıralıyor
    return y-x;
})

console.log(value);

