class aaa
{
static x;
constructor(a,b)
{
aaa.x=a;
this.xxx=b;
}
}
var a = new aaa(10,20)
console.log(a)
console.log(a.xxx)
console.log(aaa.x)

var b=  new aaa()
console.log(b.xxx)
