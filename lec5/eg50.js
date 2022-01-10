function add(a,b,c)
{
return a+b+c;
}
a=[1,2,3]
console.log(add(a[0],a[1],a[2]))
console.log(add(...a))
b=[1]
c=[4,5]
console.log(add(b[0],...c))
