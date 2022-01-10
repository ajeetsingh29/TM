function someFunction()
{
return class
 {
  constructor()
  {
    this.x=10;
  }
 }
}

class aaa extends someFunction()
{
constructor()
 {
  super();
   this.yy=111;
 }
}
var b = new aaa()
console.log(b)