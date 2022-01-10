function justDoIt()
{
function justCoolStuff()
{
console.log("function returning another function which is hell of cool");
}
return justCoolStuff;
}
a=justDoIt();
console.log(a)
a()