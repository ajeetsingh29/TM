function Toy()
{
var brand ='Phillips';
this.price=10;
this.getBrand=function()
{
return brand;
}
}

var t1= new Toy();
console.log(t1.brand);
console.log(t1.price);
console.log(t1.getBrand())