var x=[1,2,3,4,5]
var y=[6,7,8]
for(var i=0;i<y.length;i++) x.splice(x.length,0,y[i])
console.log(x)
