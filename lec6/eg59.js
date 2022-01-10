function printReport(x,y)
{
console.log("Some report related data",x,y)
}

function addHeader(func,sh)
{
console.log("Add Header got called",sh);
function proxy(p,q)
{
console.log(sh);
func(p,q);
}
return proxy;
}
kkk=addHeader(printReport,"Ujjain")
ccc=addHeader(printReport,"Dewas")
kkk(1,2)
ccc(3,4)