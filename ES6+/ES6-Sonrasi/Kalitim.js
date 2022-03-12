class Person{ //Superclass,Baseclass

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş : " + this.age )
    }
}

class Employee extends Person { //DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){ //Overriding
        // this.name = name;
        // this.age=age;
        super(name,age);
        this.salary = salary;
    }
    showInfos(){ //Overriding
        console.log("İsim" + this.name + "Yaş : " + this.age + "Maaş:" + this.salary)
    }

    raiseSalary(amount){ //Ekstra
        this.salary = this.salary + amount;
    }
}

const emp = new Employee("Eray",25,6000)
emp.showInfos()
emp.raiseSalary(500)
 console.log(emp);