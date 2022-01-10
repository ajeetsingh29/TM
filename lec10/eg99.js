var x=[1,2,3,4,5,6,7,8,9,10]
function doSomething(n)
{
console.log(n);
return n%1==0;
}
x1=[1,2,3,4,5,6,7,8,9,10]
//console.log(x.every(doSomething))
console.log(x1.every((n)=>
{
console.log(n)
return n%1==0;
}))