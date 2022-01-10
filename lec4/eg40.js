function Toy()
{
this.price=1000;
}
function add(a,b)
{
return a+b;
}
var t = new Toy();
console.log(t.price);

var t1= new Toy();
console.log(t1.price);
t1.price=500
console.log(t1.price);
console.log('t',t);
console.log('t1',t1);
var t2=t1;
t2.price=100010010;
console.log(t1.price)
console.log(t2.price)
console.log('t',t);
console.log('t1',t1);
console.log('t2',t2);


