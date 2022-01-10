function justDoIt()
{
return function()
{
console.log("Cool Anonymous Function");
};
}
a=justDoIt();
console.log(a);
a()