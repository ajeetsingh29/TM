function someFunction(a,b,c)
{
console.log("Cool",a,b,c)
setTimeout(someFunction,2000);
}

setTimeout(someFunction,2000,20,10,"Good");