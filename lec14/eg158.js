class aaa
{
static sam()
{
console.log("Static Sam Method")
}
tom()
{
console.log("non static method tom got called")
}
}

var a = new aaa();
aaa.sam()
a.tom()
//aaa.tom()
//a.sam()