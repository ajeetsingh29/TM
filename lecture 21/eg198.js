function calculateSquare(n)
{
 return n*n;
}

function calculate(n)
{
var promise= new Promise(function(resolve,reject){
setTimeout(function(){
resolve(calculateSquare(n));
},5000);
});
return promise;
}

var p1 = calculate(5);
p1.then((square)=>console.log("the Square of 5",square));

var p2=calculate(25);
p2.then((square)=>console.log("the Square of 25",square))