var readline=require('readline')
var ioInterface=readline.createInterface(
 {
 "input":process.stdin,
 "output":process.output
 }
 );

function question(q)
{
var promise= new Promise(function(resolve,reject){
console.log(q)
ioInterface.question(q,function(answer){
resolve(answer);
});
});
return promise;
}
async function main()
{
console.log("*****");
var name=await question("enter your name");
console.log("*****");
var city=await question("enter city");
var age=await question("enter age");

console.log(name);

console.log(city);

console.log(age);

ioInterface.close();
}
main()