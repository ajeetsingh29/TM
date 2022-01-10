function reduceToMax(intialOrLastGenratedValue,current,index,arr)
{
console.log("intialOrLastGenratedValue,current,index",intialOrLastGenratedValue,current,index);
if(current>intialOrLastGenratedValue) return current;
return intialOrLastGenratedValue;
}

var x=[1,2,3,12312321,4,5,6,7,8,9,11,1221,12312323,2321323]
//var y=x.reduce(reduceToMax,3)
var y =x.reduceRight(reduceToMax)
console.log(y)