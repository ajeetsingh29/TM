var x;
x= new Array();
x[0] = new Array(5);
x[1] = 45;
x[2]= new Array(2);
x[2][0]=[1,2,3];
x[2][1]=["ALPHA","DELTA","OMNICORN"];
x[3]=true
x[4]=NaN

function displayContentsOfArray(a)
{
console.log('Processing Strats');
if(Array.isArray(a))
{
if(Array.isArray(a))
{
var i=0;
while(i<a.length)
{
var j=a[i];
if(Array.isArray(j)) displayContentsOfArray(j);
else console.log(j);
i++;
}
}
}
else
{
console.log(a);
}
}

displayContentsOfArray(x);