function Bulb(w)
{
var wattage;

if(w)
 {
  if(typeof(w)=="number")
 {
   if(w>0 && w<220) wattage=w
   else wattage=0
  }
  else
 {
  wattage=0;
 }
 }
else
 {
  wattage=0;
 }


this.getWattage=function()
{
return wattage;
}
this.setWattage=function(w)
{
if(w)
 {
  if(typeof(w)=="number")
 {
   if(w>0 && w<220) wattage=w
   else wattage=0
  }
  else
 {
  wattage=0;
 }
 }
else
 {
  wattage=0;
 }

}
}

var b= new Bulb(60)
console.log(b.getWattage())
var b1 = new Bulb()
b1.wattage="qsx"
console.log(b1.getWattage())
var b2 = new Bulb("Ram")
console.log(b2.getWattage())
var b3 = new Bulb(10000)
console.log(b3.getWattage())
b3.wattage="q"
console.log(b3.getWattage())
