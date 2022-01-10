function resolveState(element,index,arr)
{
var mp=["dewas","indore","ujjain","khandawa","barnagar"];
var mh=["lonawala","mumbai","pune","khandala"]
if(mp.indexOf(element)!=-1)
{
var obj={
 "city":element,
 "state":"MADHYA PRADESH"
};
return obj;
}
if(mh.indexOf(element)!=-1)
{
 var obj={
 "city":element,
  "state":"MAHARASTRA"
};
return obj;
}

var obj={
"city":element,
"state":"UNKNOWN"
};
return obj;
}

var cities=["amla","goa","indore","khandwa","dewas"]
var x=cities.map(resolveState);
console.log(x)
