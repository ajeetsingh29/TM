function Bulb(w)
{
var wattage=w;
this.getWattage=function ()
{
return wattage;
}
}

var b1 = new Bulb(60);
var b2 =new Bulb(100);
console.log(b1.getWattage())
console.log(b2.getWattage())
console.log(b1.w)
console.log(b2.w)
//console.log(w)