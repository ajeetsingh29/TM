class aaa
{
static x=1000;
constructor()
{
console.log("Constuctor  got called")
this.y=20;
}
static sam()
{
console.log('static',aaa.x)
console.log(aaa.y)
console.log(this.x)
console.log(this.y)

}
tom()
{
console.log(aaa.x)
console.log(aaa.y)
console.log('static',this.y)
console.log(this)
}
}
aaa.sam()
var a =  new aaa()
a.tom()
