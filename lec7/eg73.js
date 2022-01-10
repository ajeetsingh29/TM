var x;
x= new Array(5);
x[0] = new Array(3);
x[1]=1;
x[2]='String';
x[3]=true
x[4]=NaN
x[5]= new Array(2);
x[5][1]=[1,2,3,4]
x[5][2]=["Cool","Sam","Tom"]
console.log(x)
console.log(Array.isArray(x[5][0]))
console.log(Array.isArray(x[5][2]))

