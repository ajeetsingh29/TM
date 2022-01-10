(function() { console.log("Welcome to GFG!"); })();
(()=>console.log("hello"))();
(()=>console.log(this))();
//(()=>console.log(arguments))();



var a=function()
{
console.log(arguments);
}
a();

var a=x()=> console.log(arguments );
a();