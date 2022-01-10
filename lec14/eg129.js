var Bulb=(function (){
var code =0;
var ds={};
function BulbConstructor(brand)
 {
   code=code+1;
   this.code=code;
   ds[this.code]={}
   ds[this.code].brand=brand;
   this.aFunction=function()
   {
     console.log(ds[this.code].brand)
   }
 }
BulbConstructor.prototype.bFunction=function()
{
console.log(this)
console.log(ds[this.code].brand);
}
console.log(this)
return BulbConstructor;
})();

var b1 = new Bulb("Phillips");
console.log(b1.BulbConstructor)
b1.aFunction();
b1.bFunction();