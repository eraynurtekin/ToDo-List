// Syntatic Sugar

//Eski hali

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim" + this.name + "Yaş : " + this.age + "Maaş:" + this.salary)
// }

// const emp = new Employee("Eray",25,6000)

// console.log(emp)

//Yeni Hali

class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş : " + this.age + " Maaş:" + this.salary)
    }

}

const emp = new Employee("Eray",24,6000)

// console.log(emp)
emp.showInfos();