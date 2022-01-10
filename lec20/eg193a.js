var readline=require("readline")
const ioInterface=readline.createInterface(
{
      input : process.stdin,
      output :  process.stdout
});
var a=0;
var b=0;
var c=0;

ioInterface.question("enter a:",(line)=>{
a=line;
ioInterface.question("enter b:",(line)=>{
b=line;
ioInterface.question("enter c:",(line)=>{
c=line;
ioInterface.close();
})
})
});


