function Bulb()
{
var brand ="Phillips"
this.aFunction=function()
{
console.log(Brand);
}
}
Bulb.prototype.bFunction=function()
{
console.log(brand);
}

var b = new Bulb()
b.aFunction()
b.bFunction()