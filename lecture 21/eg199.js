function calculateSquare(x)
{
 return x*x;
}

function calculate(x)
{
var promise= new Promise(function(resolve,reject){
setTimeout(function(){
resolve(calculateSquare(x));
},5000); 
});
return promise;

}

var p1=calculate(100);
p1.then((square)=>console.log(square)).then(function(){
p2=calculate(1000);p2.then((square)=>console.log(square))
});
