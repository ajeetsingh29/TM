function Rectangle(length,breadth)
{
this.length=length;
this.breadth=breadth;
}
function Box(length,breadth,height)
{
this.height=height;
Rectangle.apply(this,arguments);
}

var b= new Box(100,20,30);
console.log(b);