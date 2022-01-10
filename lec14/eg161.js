let bulb={
_wattage:0,
set wattage(w)
{
console.log("Setter got Called")
if(w>=0 && w<=240) _wattage=w
else _wattage=60
},
get wattage()
{
console.log("Getter got called")
return _wattage
}
};

bulb.wattage=100;
console.log(bulb.wattage);