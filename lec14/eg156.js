class Movie
{
start()
{
console.log("Start")
}
interval()
{
console.log("Interval")
}
end()
{
console.log("end")
}
}

class JungleBook extends Movie
{
reelOne()
{
console.log("Moglieee Enters the jungle")
}
reelTwo()
{
console.log("Bhageera Saves Mogliee")
}
interval()
{
console.log("In Interval  we ordered coke and popcorn")
}
}
let jb=  new JungleBook();
jb.start()
jb.reelOne()
jb.interval()
jb.reelTwo()
jb.end()
