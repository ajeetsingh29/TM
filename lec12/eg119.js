function isAnyBodyIndian(obj)
{
//console.log(obj);
return obj.country.toUpperCase()==="INDIA";
}
var x=[
{"name":"Ajeet","country":"USA"},
{"name":"Adi","country":"INDIA"},
{"name":"Srashti","country":"UK"},
{"name":"Avi","country":"pakistan"},
]
var b=x.some(isAnyBodyIndian);
//console.log(b)
if(b) console.log("Indians exist")
else console.log("Indians dont exist")