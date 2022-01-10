//named function
function doSomething(x,y)
{
return x+y; 
}

console.log("The total is ",doSomething(10,20))
var a=doSomething(10010,10101);
console.log('THe total is',a)

var b =doSomething;
console.log('The total is',b(10,22222))