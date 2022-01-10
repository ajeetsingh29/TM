function sam()
{
this.a=1000;
this.b=1000;

console.log(this)
}
this.xxx=100;
console.log(this)
sam()
var a = new sam()