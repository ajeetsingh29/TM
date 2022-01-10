var v=  new Map();
v.set(101,"Ramesh");
v.set(102,"Suresh");
v.set(103,"Ajeet");
console.log(v);
console.log(v.has(101));
console.log(v.has(1004));
var k=v.entries();
element = k.next();
while(! element.done)
{
console.log(element)
console.log(element.value)
element=k.next();
}

