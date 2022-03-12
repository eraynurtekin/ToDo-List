// console.log(this) //Global Scope

 //Yapıcı Fonksiyon -Constructor

    //  this.name = "Eray"
    
    function Employee(name,age,salary){
       this.name = name;
       this.age = age;
       this.salary = salary;

         this.showInfos = function(){
             console.log(this.name,this.age,this.salary)
         }
    }



const emp1 = new Employee("Eray","24",6000);

const emp2 = new Employee("Ahmet","25",5000);

emp1.showInfos()
emp2.showInfos()

// console.log(emp1);
// console.log(emp2);