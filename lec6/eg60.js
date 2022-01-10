function Toy()
{
this.brand='';
this.price=0;
this.manual=()=>console.log("Info about the product is of"+this.brand+"brand  whic is toy",this);
}
var t1=new Toy();
var t2= new Toy();
t1.brand='LEGO'
t1.price=1000
t2.brand='HOT WHEELS'
t2.price=3000
console.log(t1)
console.log(t2)
t1.manual()
t2.manual()