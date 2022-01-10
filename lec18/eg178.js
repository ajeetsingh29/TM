class aaa
{
 constructor()
 {
  this.x=10;
 }
}

function aFunction()
{
 return aaa;
}
function bFunction(someclass)
{
 return class extends someclass
 {
  constructor()
  {
   super();
   this.y=20;
  }
 }
}
var bbb=bFunction(Object);
class ccc extends bFunction(aFunction())
{
constructor()
{
super();
this.z=30;
}
}
class ddd extends bFunction(Object)
{
constructor()
 {
  super();
  this.t=50;
 }
}
var b= new bbb()
console.log(b)

var c= new ccc()
console.log(c)

var d= new ddd()
console.log(d)