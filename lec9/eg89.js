x=[1,2,3,4,5]
for(var i=0,j=x.length;i<j;i++) x.splice(j,0,x[i])
x.splice(0,x.length/2)
console.log(x)