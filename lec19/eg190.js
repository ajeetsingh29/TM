function divide(a,b)
{
if(b==0) throw new Error("Cannot Divide by zero");
return a/b;
}
try
{
var x=divide(Number(process.argv[2]),Number(process.argv[3]));
console.log(x)
}
catch(error)
{
console.log(error.message)
}