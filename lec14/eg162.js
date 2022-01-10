let rectangle={
length:60,
breadth:20
}
let box={
...rectangle,
height:100
}
console.log(box)
let box2=box
box2.height=1000;
console.log(box)
console.log(box2)
let box3={...box}
box3.height=10000;
console.log(box)
console.log(box2)
console.log(box3)
