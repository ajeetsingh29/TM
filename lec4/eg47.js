function add(a,b,c)
{
console.log(arguments);
console.log(arguments.length)
var i;
var total=0;
for(i=0;i<arguments.length;i++)
{
total+=arguments[i];
}
return total;
}
console.log(add(1,2,3));