function doSomething(f,x,y)
{
return f(x,y);
}
console.log(doSomething(function(a,b){
return a*b;
},10,20));

