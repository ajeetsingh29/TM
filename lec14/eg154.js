class Rectangle
{
constructor(length,breadth)
{
this.length=length;
this.breadth=breadth;
}
}
class Box extends Rectangle
{
constructor(length,breadth,heigth)
 {
  super(length,breadth);
  this.heigth=heigth;
 }
}


var b=  new Box(10,2,3)
console.log(b)