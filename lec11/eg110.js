var b={
w:0,
setWattage: function(wattage){
w=wattage;
 },
getWattage:function(){
return w;
 }
};
function king()
{
console.log(w);
console.log(this);
console.log(this.w);
}
console.log(b.w);
b.setWattage(100)
console.log(b.w);
console.log(b.getWattage());
console.log("**********")
king()
