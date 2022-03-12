//Static Methodlar new lemeden kullanabiliyorz

class Matematik{

    sqrt(x){
        console.log(x*x)
    }

    static cube(x){
        console.log(x*x*x)
    }

}

 const math = new Matematik();
 math.sqrt(3);


Matematik.cube(3)