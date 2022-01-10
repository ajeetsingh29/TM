function Bulb()
{
var brand="Phillips";
this._wattage=0;
}
Object.defineProperty(Bulb.prototype,"wattage",{
get:function(){return this._wattage},
set:function(w){this._wattage=w}
});
var b=  new Bulb()
b.wattage=60
console.log(b)