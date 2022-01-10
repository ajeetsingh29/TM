class Employee
{
constructor(name)
{
this.name=name
}
}
var b= new Employee("Ajeet")
console.log(b)
var c=  new b.constructor("Sanvi")
console.log(c)
console.log(b==c)
console.log(b instanceof Employee)
console.log(c instanceof Employee)
