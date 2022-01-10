var Bulb= function()
{
var brand ;
function BulbConstructor(bb)
 {
brand=bb;
this.aFunction=function()
  {
     console.log(brand)
  }
 }
BulbConstructor.prototype.bFunction=function()
 {
  console.log(brand)
 }
return BulbConstructor
}();
var b= new Bulb("Phillips")
b1.aFunction();
b1.bFunction();
