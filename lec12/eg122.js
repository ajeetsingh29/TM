function Bulb(w)
{
var wattage=w;
this.getWattage=function()
{
return wattage;
}
}
Bulb.prototype.getBrand=function()
{
//return "Bulb wit wattage "+wattage+"is of band Phillips"
//return "Bulb with wattage "+this.wattage+" is of band Phillips"
return "Bulb with wattage "+this.getWattage() +" is of brand Phillipsx"
}
var b1= new Bulb(60)
console.log(b1.getBrand())