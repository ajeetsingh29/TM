aaa=(someclass)=>class extends someclass
{
constructor()
 {
  super();
  this.x=10;
 }
}

bbb=(someclass)=>class extends someclass
{
constructor()
{
 super();
 this.y=100;
}
}


class ccc extends bbb(aaa(Object))
{
constructor()
 {
  super();
  this.z=1000;
 }
}

class ddd extends bbb(Object)
{
constructor()
 {
 super();
 this.z=50;
 }
}

var c= new ccc()
var d= new ddd()
console.log(c)
console.log(d)