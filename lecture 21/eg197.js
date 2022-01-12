function calculateSquare(x)
{
return x*x;
}
function calculate(y)
{
var promise= new Promise(function(resolve,reject){
setTimeout(function(){
resolve(calculateSquare(y));
},5000);
});
return promise;
}
var p1=calculate(5);
//console.log(p1);
p1.then(function(square){
console.log("Square of is:"+square);
});

console.log("Whatever");
