function divide(divident,divisor)
{
var p = new Promise(function(doneNotifier,errorNotifier){
if(divisor==0) return errorNotifier("divisor can't be zero")
else
{
  var quotient=Math.floor(divident/divisor);
  var remainder=divident%divisor;
  var r=
    {
         quotient:quotient,
          remainder:remainder
    }
  doneNotifier(r);
}
});
return p;
}

var promise=divide(9,12);
promise.then(function(result){
  console.log(result);
},
function(error){
 console.log(error);
});