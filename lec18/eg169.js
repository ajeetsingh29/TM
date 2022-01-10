var a={x:10,y:20};
console.log(a)
a.x=100
console.log(a)
var b=Object.freeze({x:10,y:20});
b.x=1111111111
console.log(b);