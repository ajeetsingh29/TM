function Toy()
{
var brand ='Phillips';
this.price=10;
this.getBrand=function()
{
return brand;
}
function doSomething()
{
console.log("Whatever");
}

this.sam=()=> doSomething();
}

var t1= new Toy();
console.log(t1.brand);
console.log(t1.price);
console.log(t1.getBrand())
//console.log(t1.doSomething())
t1.sam();