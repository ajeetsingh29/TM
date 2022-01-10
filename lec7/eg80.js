function Student()
{
this.roll=11;
this.name="Ajeet";
this.gender="M";
}

var k = new Student();
console.log(k.roll);
console.log(k.name);
console.log(k.gender);
console.log(k["roll"])
console.log(k["name"])
console.log(k["gender"])
//adding properties dynamically
k.city='Dewas'
k["MobileNumber"]=99121212121;
console.log(k)

