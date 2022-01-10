function myComparator(i,j)
{
if(i==j) return 0;
if(i>j)return 1;
if(j<i)return -1;
}
var x=[112,123,123,123,12334234,12312312312,-12313,-2312312]
y=x.sort(myComparator);
console.log(y)


function myComparatorr(i,j)
{
if(i==j) return 0;
if(i>j)return -1;
if(j<i)return 1;
}
var x=[112,123,123,123,12334234,12312312312,-12313,-2312312]
y=x.sort(myComparatorr);
console.log(y)