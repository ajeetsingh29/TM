function somefunc(a,b,c,d)
{
console.log('first element',a);
console.log('second element',b);
console.log('third element',c);
console.log('fourth element',d);
return a+b;
}


var x=[10,20,30,40,50]
var y=x.reduce(somefunc)
console.log(y)
