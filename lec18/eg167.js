function printSum(x,y)
{
let z=x+y;
console.log(x,y);
console.log(z);
return z;
}

var add5 =printSum.bind(undefined,5)
var j= add5(10) ;
console.log(j)