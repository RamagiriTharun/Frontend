var Emp = /** @class */ (function () {
    function Emp(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Emp.prototype.getPerson = function () {
        console.log("Name : " + this.name, " Age : " + this.age + " Salary : " + this.salary);
    };
    return Emp;
}());
var e1 = new Emp("Tharun", 21, 25000);
e1.getPerson();
