function justDoIt()
{
return ()=>{
console.log("Cool fat Arrow Function ");
}
}
a=justDoIt();
console.log(a)
a();
function justDooIt()
{
return ()=> console.log('One liner fat arrow');
}
a=justDooIt();
console.log(a);
a();

function someExperiment()
{
return (a,b)=>a*b;
}

a=someExperiment()
console.log(a(10,20))