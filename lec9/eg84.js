var queue=  new Array();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue)
var y;
while(queue.length>0)
{
y=queue.shift();
console.log(y)
}
console.log(queue)