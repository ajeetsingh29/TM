function someFunction(g)
{
console.log(g);
}
var k= someFunction.bind(someFunction,"god is great")
k()