class aaa
{
constructor()
{
this.x=10;
}
}

class bbb extends aaa
{
constructor()
{
super();
this.y=20;
}
}
var a = new aaa();
var b= new bbb();
console.log(a)
console.log(b)