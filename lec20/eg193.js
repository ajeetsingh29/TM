function divide(dividend,divisor)
{
  var p= new Promise(function(doneNotifier,errorNotifier){
  var r;
  setTimeout(function(){
   if(divisor==0)
    {
      errorNotifier("Cannot Divide By Zero");
    }
   else
   {
      r =
              {
                  quotient:Math.floor(dividend/divisor),
                  remainder:dividend%divisor  
              }
     doneNotifier(r);
   } 
  },5000);

});
return p;
}

var a=10;
var b=3;
var promise=divide(a,b);
promise.then(function(result)
{
var quotient=result.quotient;
var remainder=result.remainder;
console.log(`After dividing ${a} by ${b}, then quotient is ${quotient} and remainder is ${remainder}`);
}
,
function(error)
{
 console.log(`Problem :${error}`)
}
);