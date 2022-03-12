// const object = new Object();
// const object2 = new Object();
// object.name ="Eray"
// console.log(object)


function Employee(name,age){
    this.name = name;
    this.age = age;
    
}

Employee.prototype.showInfos = function(){
    console.log(`İsim :${this.name} Yaş: ${this.age}`)
}

const emp1 = new Employee("Eray",25);
emp1.showInfos();
console.log(emp1)

console.log(emp1.toString())