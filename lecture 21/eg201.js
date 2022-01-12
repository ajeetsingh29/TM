function calculate(n)
{
 return n*n;
}


async function main()
{
//console.log("Ajeet");
//var square1= await calculate(121211);
//console.log(square1);
//console.log("snavi");
setTimeout(()=>console.log(calculate(11)),4000);
setTimeout(()=>console.log(calculate(1)),3000);
setTimeout(()=>console.log(calculate(1122)),2000);
//var square2=await calculate("121212");
//console.log(square2);
//console.log("adi");
}
main()