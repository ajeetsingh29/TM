function add(a,b,c)
{
return a+b+c;
}
function sam(x,y,z)
{
return add(...arguments)
}
console.log(sam(10,20,30));
