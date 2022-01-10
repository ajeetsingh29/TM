
var readline=require('readline')
function divide(divident,divisor,a,b)
{
setTimeout(function(){
if(divisor==0) 
 {
   onError("Cannot Divide By zero");
 }
else
 {
  var quotient=Math.floor(divident/divisor);
  var remainder=divident%divisor;
  onSuccess(quotient,remainder);
 }
},5000)
}

var ioInterface=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

function onSuccess(q,r)
{
 console.log(`The division of ${a} and ${b} is quotient=${q} and remainder ${r}`);
}

function onError(e)
{
 console.log(e)
}


var a=0;
var b=0;
ioInterface.question("Enter the Divident  :",(answer)=>
    {
     a=Number(answer);
     ioInterface.question("Enter the Divisor  :",(answer)=>{
     b=Number(answer);
     ioInterface.close();
     divide(a,b,onSuccess,onError); 
    });
});
