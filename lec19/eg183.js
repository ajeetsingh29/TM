const readline=require("readline")
const lineReader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

lineReader.question("Enter Name:",function(line){
console.log(line);
lineReader.close();
});