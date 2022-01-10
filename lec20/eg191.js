function divide(divident,divisor,onSucces,onError)
{
setTimeout(()=>{
if(divisor==0) onError("Cannot Divide By zero")
else onSuccess(divident,divisor)
},5000)
}
var a=10;
var b=0;
function onError(e)
 {
   console.log("Message:",e)
 }
function onSuccess(divident,divisor)
 {
  console.log("Division",divident/divisor)
 }
divide(Number(process.argv[2]),Number(process.argv[3]),onError,onSuccess)
