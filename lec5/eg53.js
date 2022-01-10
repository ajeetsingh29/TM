function doSomething(f,x,y)
{
console.log(f);
return f(x,y);
}
console.log(doSomething(function(p,q){return p+q},10,20))