function Bulb(w)
{
this.wattage =w;
this.setWattage=function(w)
 {
 this.wattage=w;
 }
this.getWattage=function()
 {
 return this.wattage;
 }
}
Bulb.prototype.getBrand=function()
{
return "The bulb with wattage "+this.wattage +" is of brand phillips"
}
var bulb= new Bulb(60)
console.log(bulb);
console.log(bulb.wattage);
console.log(bulb.getBrand());
var b=new Bulb();
console.log(b)
console.log(b.getBrand())