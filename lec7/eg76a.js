function printContentsOfArray(a)
{
console.log('Printing Contents of array');
var i=0;
while(i<a.length)
{
if(Array.isArray(a[i])) printContentsOfArray(a[i]);
else console.log(a[i])
i++;
if(i===a.length) console.log('end of array')
}
}
var x;
x= new Array();
x[0] = new Array(5);
x[1] = 45;
x[2]= new Array(2);
x[2][0]=[1,2,3];
x[2][1]=["ALPHA","DELTA","OMNICORN"];
x[3]=true
x[4]=NaN
printContentsOfArray(x)
