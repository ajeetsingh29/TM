function calculateSquare(x)
{
return x*x; 
}

function calculate(y)
{
var promise= new Promise(function(resolve,reject){
setTimeout(function(){
 resolve(calculateSquare(y))
},5000);
});
return promise
}

var promise=calculate(5)
promise.then((square)=>{console.log(square)})