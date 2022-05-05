interface Person {  
    name: String; 
    age: number;
    getPerson();
} 

class Emp implements Person{
    name: String;
    age: number;
    salary: number;

    constructor(name: String, age: number, salary: number){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getPerson() {
        console.log("Name : " +this.name, " Age : "+this.age+ " Salary : "+this.salary ); 
    }
}

let e1 = new Emp("Tharun",21,25000);
e1.getPerson();